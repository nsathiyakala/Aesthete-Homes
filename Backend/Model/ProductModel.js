const mongoose=require("mongoose")

const productSchema= new  mongoose.Schema({
    name:{
        type:String,
    },
    price:String,
    description:String,
    reviews:String,
    images:[
        {images:String}
    ],
    category:String,
    stock:String,
    numOfReviews:String,
    createdAt:Date
})

const ProductModel=mongoose.model("Products", productSchema)
 module.exports=ProductModel