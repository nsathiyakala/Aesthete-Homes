const ProductModel = require("../Model/ProductModel")


exports.getProducts=async(req,res,next)=>{

   const products= await ProductModel.find({})

    res.json({
        success:true,
        products
    })
}

exports.getSingleProduct=async(req,res,next)=>{

    try {
        const product= await ProductModel.findById(req.params.id)
    res.json({
        success:true,
        product
    })
    }
    
    catch (error) {
        res.status(404).json({
            success:false,
            message:"unable to get Product"
        })
    }

    
}

