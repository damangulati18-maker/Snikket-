const express = require("express");
const Monthend = require("../models/monthend");

const categoryRouter = express.Router();

categoryRouter.get("/get/category/formal",async(req,res)=>{
    try{
        const results=await Monthend.find({
            itemCategory:"formal",
        })
        res.send({message: "Formals are-",data: results});
    }
    catch(err){
        es.status(400).send("ERROR:" + err.message);
    }
})

categoryRouter.get("/get/category/casual",async(req,res)=>{
    try{
        const results=await Monthend.find({
            itemCategory:"casual",
        })
        res.send({message: "Casualss are-",data: results});
    }
    catch(err){
        es.status(400).send("ERROR:" + err.message);
    }
})

categoryRouter.get("/get/category/traditional",async(req,res)=>{
    try{
        const results=await Monthend.find({
            itemCategory:"traditional",
        })
        res.send({message: "Traditionals are-",data: results});
    }
    catch(err){
        es.status(400).send("ERROR:" + err.message);
    }
})

module.exports = categoryRouter;