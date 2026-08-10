const express = require('express');
const connectDB=require("./database");
const cookieParser=require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const app=express();

app .use(cors({
    origin:"http://localhost:5173",
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

connectDB()
    .then(()=>{
        console.log("cluster connected");
        app.listen(5001);
    })
    .catch((err)=>{
        console.error("cluster not connected error:"+err);
    })