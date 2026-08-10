const express = require("express");
const Monthend = require("../models/monthend");

const monthendRouter = express.Router();

monthendRouter.post("/monthendOffers", async(req,res)=>{
    try{
        const{itemName,itemType,color,price,fabric,boughtearlier,photoUrl,itemCategory,size,instock}=req.body;
        const newItem=new Monthend({
            itemName,
            itemType,
            color,
            price,
            fabric,
            boughtearlier,
            photoUrl,
            itemCategory,
            size,
            instock
        })

    await newItem.save();
    res.send(itemName+"added successfully to database");
    }
    catch(err){
        console.log(err);
        res.status(400).send("ERROR:" +err.message);
    }
})

monthendRouter.get("/getregularT-shirts",async(req,res)=>{
    try{
        const results=await Monthend.find({
            itemType:"regular",
        })
        res.send({message: "Regular t shirts-",data: results});
    }
    catch(err){
        es.status(400).send("ERROR:" + err.message);
    }
})

monthendRouter.get("/getoversizedtshirts",async(req,res)=>{
    try{
        const results=await Monthend.find({
            itemType:"oversized",
        })
        res.send({message: "oversized T-shirts-",data: results});
    }
    catch(err){
        es.status(400).send("ERROR:" + err.message);
    }
})

monthendRouter.get("/getshirts",async(req,res)=>{
    try{
        const results=await Monthend.find({
            itemType:"shirt",
        })
        res.send({message: "shirts-",data: results});
    }
    catch(err){
        es.status(400).send("ERROR:" + err.message);
    }
})

monthendRouter.get("/getdenims",async(req,res)=>{
    try{
        const results=await Monthend.find({
            itemType:"denims",
        })
        res.send({message: "denims-",data: results});
    }
    catch(err){
        es.status(400).send("ERROR:" + err.message);
    }
})

monthendRouter.get("/getshorts",async(req,res)=>{
    try{
        const results=await Monthend.find({
            itemType:"shorts",
        })
        res.send({message: "shorts-",data: results});
    }
    catch(err){
        es.status(400).send("ERROR:" + err.message);
    }
})

monthendRouter.get("/getjoggers",async(req,res)=>{
    try{
        const results=await Monthend.find({
            itemType:"joggers",
        })
        res.send({message: "joggers",data: results});
    }
    catch(err){
        es.status(400).send("ERROR:" + err.message);
    }
})

module.exports = monthendRouter;