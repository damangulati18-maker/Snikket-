const mongoose = require("mongoose");

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://damangulati18_db_user:UZStpcVcSVC7AQfN@cluster0.dumpi31.mongodb.net/clothingapp");//datingapp is the name of database which will be declared in our cluster
};

module.exports=connectDB;