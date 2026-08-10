const express = require("express");
const OpenAI = require("openai");

const Monthend = require("../models/monthend");

const aiRouter = express.Router();

const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
});

aiRouter.post("/shoppingassisstant",async(req,res)=>{
    const { query } = req.body;
    try{
        const response = await client.responses.create({
            model:"gpt-4.1-mini",
            input:`Return ONLY valid JSON (no markdown, no text).

            Example:
            {"color":"black","price":{"$lte":2000}}

            User Request:
            ${query}
            `
        });
        let filters={};
        try{
            const text =response.output_text ||response.output?.[0]?.content?.[0]?.text;
            if (!text) {
                return res.status(500).json({
                error: "No text returned from AI",
                raw: response
                });
            }
            filters = JSON.parse(text);
        }
        catch(err){
            return res.status(400).json({
                error: "AI returned invalid JSON",
                raw: response.output_text,
            })
        }
        if (!filters || typeof filters !== "object") {
            return res.status(400).json({
            error: "Invalid filters from AI"
            });
        }
        const products = await Monthend.find(filters);
        res.json({filters,products})
    }
    catch(err){
        console.error("AI ROUTE ERROR:", err);
        res.status(500).json({ error: err.message });
    }
   
})

module.exports = aiRouter;