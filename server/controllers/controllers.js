const ProductModel = require('../models/productSchema')

module.exports.getProduct = async (req,res) => {
    try {
     const allproduct = await ProductModel.find();
     res.status(200).json(allproduct)
    } catch (error) {
     res.status(500).json({error : error.message})
    }
 }

 module.exports.createProduct = async (req,res) => {
    try {
        const {name,image,price,description} = req.body
        if(name && image && price && description){
        const newProduct = await ProductModel.create(req.body);
        return res.status(200).json(newProduct)
        }

        res.status(400).json({error : "please enter all details"})
    } catch (error) {
     res.status(500).json({error : error.message})
    }
 }





