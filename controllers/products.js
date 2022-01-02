const Product = require('../models/Product')

const getAllProductsStatic = async (req,res) => {
    const product = await Product.find({price:79})
    res.status(200).json(product)
}
const getAllProducts = async (req,res) => {
    // console.log(req.query)
    const products = await Product.find(req.query)
    res.status(200).json({products,nbHabits:products.length})
}

module.exports =  { 
    getAllProductsStatic,
    getAllProducts, 
}