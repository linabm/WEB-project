const express = require('express'); 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose= require("mongoose");


const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");

const url= 'mongodb+srv://thaissia:sami@cluster0.vw2zq.mongodb.net/insappes?retryWrites=true&w=majority'

mongoose
  .connect(url)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });



require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
// faire un check product?


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());


// jwt
app.get('*', checkUser); // assure la securité, car check à chaque requete
app.get('/jwtid', requireAuth, (req, res) => { // on le fait une seule fois en front, à l'autentifiction
  res.status(200).send(res.locals.user._id)
});


// routes

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);



//serveur 

app.listen(process.env.PORT, () => {
  
  console.log(`Listening on port ${process.env.PORT}`)
  
  
})

