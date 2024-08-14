const FeaturedProductsModel = require("../Model/featuredProductsModel")

exports.getFeatutedProducts=async(req,res,next)=>{
    const FeaturedProducts= await FeaturedProductsModel.find({})
    res.json({
        success:true,
        FeaturedProducts
})
}

exports.getFeaturedSingleProduct=async(req,res,next)=>{

    try {
        const FeaturedSingleproduct= await FeaturedProductsModel.findById(req.params.id)
    res.json({
        success:true,
        FeaturedSingleproduct
    })
    }
    
    catch (error) {
        res.status(404).json({
            success:false,
            message:"unable to get Product"
        })
    }
}