const express=require("express")
const { getFeatutedProducts, getFeaturedSingleProduct } = require("../controller/featuredProductController")
const router=express.Router()

router.route("/featuredproducts").get(getFeatutedProducts)
router.route("/featuredproduct/:id").get(getFeaturedSingleProduct)

module.exports=router