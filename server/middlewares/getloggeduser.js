const jwt=require("jsonwebtoken"); 
const User =require("../models/user");

const loggedUser =async(req,res,next)=>{
    try{
        const{token} = req.cookies;
        if(!token){
            return res.status(401).send("PLease login first");
        }
        const decodedobj=await jwt.verify(token,"secretkeyclothingapp");
        const{_id}=decodedobj;
        const userx=await User.findById(_id);
        if(!userx){
            throw new Error("User not found please login again");
        }
        req.user=userx;//this store the info of loggedin user
        next();
    }
    catch(err){
        res.status(401).send("ERROR:"+ err.message);
    }
}

module.exports ={loggedUser};