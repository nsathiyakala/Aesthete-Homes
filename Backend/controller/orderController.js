const OrderModel = require("../Model/orderModel")
const featuredproductModel =require("../Model/featuredProductsModel")
const ProductModel = require("../Model/ProductModel")

exports.CreateOrder=async(req,res,next)=>{
    const cartItems=req.body

    const amount=Number(cartItems.reduce((acc,item)=>{
        return acc + (item.productDetail.price * item.qty)
    },0)).toFixed(2)
    console.log(amount); 

    const status="pending"

    const order= await OrderModel.create({cartItems,amount,status})

    // ----stock updation 
    // cartItems.forEach(async (item) => {
    //     const product = await featuredproductModel.findById(item.productDetail._id)
    //     product.stock= product.stock - item.qty
    //     await product.save()
    // });

    // cartItems.forEach(async (item) => {
    //     const product = await ProductModel.findById(item.productDetail._id)
    //     product.stock= product.stock - item.qty
    //     await product.save()
    // });
   
   

    res.json({
        success:"true",
        order
    })
}