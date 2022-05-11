const express = require('express'); // permet de se rapprocher de laguage humain
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
//const productRoute = require("./routes/product");



require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');



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
//app.use("/api/products", productRoute);


//serveur 

app.listen(process.env.PORT, () => {
  
  console.log(`Listening on port ${process.env.PORT}`)
  
})

