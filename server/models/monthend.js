const mongoose =require("mongoose");
//const validator =require("validator");

const monthEndSchema = new mongoose.Schema({
    itemName:{
        type:String,
    },
    itemType:{
        type:String,
        trim:true
    },
    color: [
        {
            type: String,
            trim: true,
        },
    ],
    price:{
        type:Number,
        min:100,
    },
    fabric:{
        type:String,
    },
    boughtearlier:{
        type:Number,
    },
    photoUrl:{
        type:String,
        default:"https://cdn.vectorstock.com/i/500p/97/56/default-placeholder-fitness-trainer-in-a-t-shirt-vector-21169756.jpg"
    },
    itemCategory:{
        type:String,
    },
    size: [
      {
        type: String,
        enum: ["S", "M", "L", "XL", "XXL"],
        required: true,
      },
    ],
    instock:{
        type:Boolean,
        required:true
    }
},{
    timestamps:true,
})

module.exports = mongoose.model("Monthend",monthEndSchema);