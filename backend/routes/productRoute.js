import express from 'express';
import data from '../data.js'
import Product from '../models/productModel.js';
import { getToken } from '../util.js';

const userRouter = express.Router();

userRouter.get("/",async(req,res)=>{

    const products = await Product.find({});
    res.send(products);
});

userRouter.get("/:id",async(req,res)=>{

    const product = await Product.find({_id: req.params.id});
    if(product){
    res.send(product);}
    else{
        res.status(404).send({message:"Product not found"})
    }
});


userRouter.post("/",async(req,res)=>{
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        description: req.body.description,
        stock : req.body.stock
    });
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send({message:"New product created!",data:newProduct})
    }
    return res.status(500).send({message:"Error in creating product "})
})

export default userRouter;
