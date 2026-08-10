const { loggedUser } = require("../middlewares/getloggeduser");
const express = require("express");
const mongoose = require("mongoose");

const User =require("../models/user");

const cartRouter = express.Router();

cartRouter.post("/addtocart",loggedUser,async(req,res)=>{
    try{
        //getting the logged user using middleware which uses token to get details
        const currUser=req.user;
        //getting info from api body
        const {
            itemName,
            itemType,
            color,
            price,
            fabric,
            photoUrl,
            boughtearlier,
            itemCategory,
            size
        } = req.body;
        //now we access cart field of curruser and push items
         currUser.cart.push({
            itemName,
            itemType,
            color,
            price,
            fabric,
            photoUrl,
            boughtearlier,
            itemCategory,
            size
        });
        await currUser.save();
        res.status(200).json({ message: "Item added to cart",cart: currUser.cart});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})

cartRouter.get("/getcartdata",loggedUser,(req,res)=>{
    try{
        //getting the logged user using middleware which uses token to get details
        const currUser=req.user;
        const cartData=currUser.cart;
        res.send(cartData);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})

cartRouter.post("/clearcart",loggedUser,async(req,res)=>{
    //getting the logged user using middleware which uses token to get details
    try{
        const currUserid=req.user._id;
        const updateduser=await User.findByIdAndUpdate(
            currUserid,
          { $set: { cart: [] } },
          { new: true }
        );
        res.send(updateduser);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
})

cartRouter.post("/removeitemfromcart",async(req,res)=>{
    try{
        const {deleteobjid,loguser}=req.body;//this is a string coming from front end which is the id of object to be deleted from cart array of objects
        const mongoId=new mongoose.Types.ObjectId(deleteobjid);//convert deleteobjid from string to mongodb id
        const updateUser=await User.findByIdAndUpdate(loguser,{$pull:{cart:{_id:mongoId}}},{new:true});
        res.send("item deleted from cart")
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
})

cartRouter.post("/addBill/Coinstocart",loggedUser,async(req,res)=>{
    try{
        const {cartBill,cartCoins} = req.body;
        const loggeduserId = req.user._id;
        const updateduser=await User.findByIdAndUpdate(
            loggeduserId,
          { $set: { cartBill:cartBill,cartCoins:cartCoins} },
          { new: true }
        );
        res.send(updateduser);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
})

cartRouter.post("/clearcartbill/updatecoins/ordersuccess",loggedUser,async(req,res)=>{
    try{
        const currUserid=req.user._id;
        const currCoins =req.user.snikketCoins;
        const newCoins=req.user.cartCoins;
        const updatedValue=newCoins+currCoins;
        const updateduser=await User.findByIdAndUpdate(
            currUserid,
          { $set: { cartBill:0,cartCoins:0,snikketCoins:updatedValue } },
          { new: true }
        );
        res.send(updateduser);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
    }
)

module.exports = cartRouter;