const express = require("express");
const jwt =require("jsonwebtoken");

const User =require("../models/user");
const { loggedUser } = require("../middlewares/getloggeduser");
const sendOtp = require("../middlewares/sendotpsms");

const authRouter = express.Router();

authRouter.post("/signup",async (req,res)=>{

    const{userName,mobile}=req.body;
    const adduser=new User({
        userName,
        mobile,
    })
    await adduser.save();
    //now we will create token for new signed user also
    const token=await jwt.sign({_id:adduser._id},"secretkeyclothingapp");
    res.cookie("token",token);
    res.send(adduser);
});

authRouter.post("/login",async(req,res)=>{
    try{
        const {mobile}=req.body;
        const checkuser= await User.findOne({mobile:mobile});
        if(!checkuser)
        {
            //if mobile not there in db
            return res.status(400).json({
                message: "Incorrect mobile number"
            });
        }

        //if mobile number is registered we go to otp verification
        //this is otp generation step
        const otp = Math.floor(
            10000 + Math.random() * 90000
        ).toString();
        
        //now we save the generated otp to user which we located in db using mobile number
        checkuser.otp = otp;

        //generating expiry date of otp
        checkuser.otpExpiry = new Date(Date.now() + 5*60*1000);

        //saving otp and otpexpiry in db
        await checkuser.save();
        
        //callind the sendOtp middleware to send otp generated here to mobile number
        await sendOtp(mobile, otp); 
        //we dont have twilio number so commenting out the middleware to send otp through twilio uncomment to send otp through twilio on number
        console.log("Received mobile:", req.body.mobile);

        res.send("OTP sent to "+mobile)
    }
    catch(err){ 
        res.status(500).json({
            message: err.message
        });
    }
});

authRouter.post("/logout",async(req,res)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),//we will only expire the cookie ans setting token to null
    });
    res.send("Logged out");
})

authRouter.get("/logindetails",loggedUser,async(req,res)=>{
    const loggeduser=req.user;
    res.send(loggeduser);
})

authRouter.post("/verify-otp",async(req,res)=>{
    try{
        //now we recieve otp and mobile number from front end
        const{mobile,otp}=req.body;

        //now we find the user using mobile number
        const user = await User.findOne({mobile});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        if(user.otp !== otp){
            return res.status(400).json({message:"Incorrect OTP"});
        }
        if(user.otpExpiry < Date.now()){
            return res.status(400).json({message:"OTP Expired"});
        }
        
        //now the otp is verified if we reach here so now we create token for logged user
        const token = jwt.sign({_id:user._id},"secretkeyclothingapp");
        res.cookie("token",token);

        //now set otp and expiry date as null after verification
        user.otp = null;
        user.otpExpiry = null;
        await user.save();
        res.status(200).json({message:"Login Success",user});
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

module.exports = authRouter;