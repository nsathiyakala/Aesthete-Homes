const mongoose= require("mongoose")

const featuredProducts= new mongoose.Schema({
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

const FeaturedProductsModel= mongoose.model("featuredProduct", featuredProducts)
module.exports=FeaturedProductsModel