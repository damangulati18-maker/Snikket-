const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const User =require("../models/user");
const { loggedUser } = require("../middlewares/getloggeduser");

const userRouter = express.Router();

userRouter.get("/getcoins",loggedUser,async(req,res)=>{
    try{
        const userCoins=req.user.snikketCoins;
        res.send(userCoins);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
});

userRouter.post("/create-checkout-session", loggedUser, async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const amount = user.cartBill;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: "Snikket Order",
                    },
                    unit_amount: amount * 100,//as stripe expect money in paise we send money in paisas which is represented by stripe in rupees
                },
                quantity: 1,
            }],
            mode: "payment",
            success_url: "http://localhost:5173/orderplaced",
            cancel_url: "http://localhost:5173/ordernotplaced",
        });

        res.send({ url: session.url });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

userRouter.post("/addoderdetails/tomyorders",loggedUser,async(req,res)=>{
    try{
        const currUserid=req.user._id;
        const userCart = req.user.cart;
        const date= req.user.updatedAt;
        const orderBill = req.user.cartBill;
        const orderDetails=userCart.map(i=>({
            itemName:i.itemName,
            price:i.price,
            photoUrl:i.photoUrl
        }));
        //now we have all the info from cart so we will update the myOrders field in user database and call this api only when user goes to orderplaced page
        const addOrder=await User.findByIdAndUpdate(
            currUserid,
            {$push:{myOrders:{orderTotal:orderBill,orderDate:date,items:orderDetails}}},//as push add to existing value and set replace with previous
            {new:true}
        );
        res.send(addOrder.myOrders);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
})

userRouter.get("/getlistofmyorders",loggedUser,async(req,res)=>{
    try{
        const currUser=req.user;
        res.send(currUser.myOrders);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
})

module.exports = userRouter;