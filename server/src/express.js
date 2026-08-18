const express = require('express');
const connectDB=require("./database");
const cookieParser=require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const app=express(); 

app .use(cors({
    origin: process.env.CLIENT_URL, 
    credentials:true,
    //methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
}));

app.use(express.json());
app.use(cookieParser());

//Routes->
const monthendRouter = require("../routes/monthendroutes");
const authRouter = require("../routes/authroutes");
const cartRouter = require("../routes/cartroutes");
const userRouter = require("../routes/userroutes")
const categoryRouter = require("../routes/categoryroutes");
const aiRouter = require("../routes/airoutes")

app.use("/" ,monthendRouter);
app.use("/",authRouter);
app.use("/",cartRouter);
app.use("/",userRouter);
app.use("/",categoryRouter);
app.use("/",aiRouter);

const PORT = process.env.PORT || 5001;

connectDB()
    .then(()=>{
        console.log("cluster connected");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err)=>{
        console.error("cluster not connected error:"+err);
    });