const User = require("../models/User");
const router = require("express").Router();


//GET ALL USER
router.get("/", /*verifyTokenAndAdmin,*/ async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
