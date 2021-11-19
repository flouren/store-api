require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/products')

const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('seccess');
        process.exit(0)
    } catch (error) {
        console.log('DB connection error :',error);
        process.exit(1)
    }
}

start()