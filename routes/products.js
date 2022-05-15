

const Product = require("../models/Product");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const fs = require("fs");
const multer = require("multer");
const upload = multer();
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
const router = require("express").Router();

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  console.log("ouais coucou à")
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//PUBLISH 
router.post('/', /*upload.single("file"),*/ async (req, res) => {
  console.log(req.body.posterName);

  /*

  
  let fileName;
  
  if (req.file !== null) {
    try {
      if (
        req.file.detectedMimeType != "image/jpg" &&
        req.file.detectedMimeType != "image/png" &&
        req.file.detectedMimeType != "image/jpeg"
      )
        throw Error("invalid file");

      if (req.file.size > 500000) throw Error("max size");
    } catch (err) {
      //const errors = uploadErrors(err);
      return res.status(201).json(err);
    }
    
    fileName = req.body.posterName + Date.now() + ".jpg";
    
    await pipeline(
      req.file.stream,
      *fs.createWriteStream(
        `${__dirname}/./client/public/upload/product/${fileName}`
      )
    );
  } 
 
  */
  const newPost = new Product({
    
    posterName: req.body.posterName,
    title: req.body.title,
    desc: req.body.desc,
    img: req.file, //req.file !== null ? "./upload/product/" + fileName : "",
    //categories: { type: Array },
    size: req.body.size,
    color: req.body.color,
    price: req.body.price,
    état: req.body.état
    
   
  });
  
  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
}); 

module.exports = router;
