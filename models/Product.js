const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  { 
    posterName: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String},
    //categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    état:{ type: String },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);