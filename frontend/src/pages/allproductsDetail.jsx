import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {toast} from "react-toastify"

export default function AllProductDetails({cartItem, setCartItems}) {
    const [productDetail, setProductDetail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "/product/" + id)
            .then(res => res.json())
            .then(res => setProductDetail(res.product))
            
    }, [id])

    const [qty,setQty] = useState(1)

    function AddTOCart(){
       const itemExist = cartItem.find((item)=>{ return item.productDetail._id === productDetail._id})  
       if(!itemExist){
        const newItem = {productDetail,qty}
        setCartItems((state)=>[...state, newItem])
        toast.success("Product Added to Cart")
       }
       else 
       toast.success("Product Already Added to Cart")
        
    }
    function incrementQty(){
        if(productDetail.stock>qty){
            setQty(state=>state+1)
        }
        
    }

    function decrementQty(){
        if(qty>0){
            setQty(state=>state-1)
        }
    }


    return (
        productDetail && <Fragment>
            <div className="container productDetail-container" style={{ padding: "50px 0" }}>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row ">
                            <div className="col-12 col-lg-7 pd-img-con" >
                                <div className="img-inner">
                                    <img className="img-fluid" src={productDetail.images[0].images} alt="product-img" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 pd-details-con">
                                <div className="pd-details">
                                    <h3 className="product-title">{productDetail.name}</h3>
                                    <p className="price">₹{productDetail.price}</p>
                                    <div className="rating-outer">
                                        <div className="rating-inner" style={{ width: `${productDetail.reviews / 5 * 100}%` }}></div>
                                    </div>
                                    <div className="quantity">
                                        <h4>Quantity</h4>
                                        <input type="number" id="numberInput" value={qty} className="qty-input" readOnly />
                                        <button className="qty-increment" onClick={incrementQty}>+</button>
                                        <button className="qty-decrement" onClick={decrementQty}>-</button>
                                    </div>
                                    <button type='button' className="cart" onClick={AddTOCart}  >ADD TO CART</button>
                                    <p className="status" style={{ fontWeight: "300", fontSize: "15px" }}> <b style={{ fontWeight: "500" }}>Status:</b> {productDetail.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                                    <h3 className="product-info">Product Info</h3>
                                    <p className="pd-content">{productDetail.description}</p>
                                    <p className="soldBy" style={{ fontWeight: "400", fontSize: "15px" }}> <b style={{ fontWeight: "500" }}>Sold By:</b> {productDetail.Seller}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p style={{ textAlign: "justify", padding: "0 20px", fontSize: "12px", fontWeight: "400" }}>Items can be returned within 30 days of purchase in original condition for a full refund or exchange. Once we receive and inspect your return, a refund will be processed to your original payment method within 7-10 business days. For exchanges, please contact customer service. Proof of purchase is required, and final sale items are non-returnable. Return shipping costs are the customer's responsibility unless the return is due to our error.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </Fragment>
        
    )
}
