const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  { 
    posterName: { type: String },
    title: { type: String}, //required: true, unique: true 
    desc: { type: String },
    img: { type: String},
    //categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number },
    état:{ type: String },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);