import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
 import userRouter from './routes/userRouter';
//import router from './routes/userRouter';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
 const connectDB = require('./db.js');

connectDB();

// const mongodbUrl = config.MONGODB_URL;
// mongoose.connect(mongodbUrl,{
//     useNewUrlParser : true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// }).catch(error => console.log(error.reason));


const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users/", userRouter);
app.get("/api/products:id", (req,res)=>{
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if(product)
        res.send(product);
    else
        res.send(404).send({msg:"Product not found /"})
});


app.get("/api/products",(req,res)=>{
    res.send(data.products);
});

app.listen(5000, ()=>{ console.log("Server started at http://localhost:5000")}); 











// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));