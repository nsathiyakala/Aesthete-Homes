import React, { Fragment,  useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Cart({cartItem,setCartItems}) {

    function increaseQty(item){
       if (item.productDetail.stock === item.qty){
        return;
       }
       const updateItem = cartItem.map((i)=>{
        if(i.productDetail._id === item.productDetail._id){
            if(i.qty<i.productDetail.stock)
            i.qty++
        }
        return i;
       })

       setCartItems(updateItem)
    }

    function decreaseQty(item){
        if (item.productDetail.stock === item.qty){
         return;
        }
        const updateItem = cartItem.map((i)=>{
         if(i.productDetail._id === item.productDetail._id){
            if(i.qty>1)
             i.qty--
         }
         return i;
        })
 
        setCartItems(updateItem)
     }

    //  function removeItem(item){
    //     const updateItem = cartItem.filter((i)=>{
    //         if(i.productDetail._id !== item.productDetail._id){
    //             return true;
    //         }
            
    //     })
    //        setCartItems(updateItem);
    //  }

    function removeItem(item) {
        const updateItem = cartItem.filter((i) => {
            return i.productDetail._id !== item.productDetail._id;
        });
        
        setCartItems(updateItem);
    }

    const [complete,setComplete] =useState(false)

     function OrderPlaced(){
        fetch(process.env.REACT_APP_API_URL+"/order",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(cartItem)
        })
        .then(()=>{
            setCartItems([])
            setComplete(true)
            toast.success("Order Placed!")
        })
        
     }

     
  return (
    cartItem.length > 0 ?
        <Fragment>
            <div className="container" >
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className="row d-flex justify-content-between">
                            <div className="col-12 col-lg-8">
                                <div className="cart-head">
                                    <h2 className="mt-5 cart-title">My Cart </h2>
                                    <h2 className="mt-5 cart-title"> Items: {cartItem.length}</h2>
                                </div>

                                {cartItem.map((item)=> (
                                    
                                    <Fragment>
                                    <hr />
                                    <div className="cart-item">
                                        <div className="row">
                                            <div className="col-4 col-lg-3" >
                                                <img className="img-fluid" src={item.productDetail.images[0].images} alt="product-img" />
                                            </div>
            
                                            <div className="col-7 col-lg-3" >
                                                <Link to={"/featuredproducts/"+ item.productDetail._id} id="cart-product-name">{item.productDetail.name}</Link>
                                                <p className="cart-price">₹{item.productDetail.price}</p>
                                                <p className="cart-status"> <b>Status:</b> {item.productDetail.stock > 0 ? "In Stock": "Out OF Stock" }</p>
                                            </div>
            
            
            
                                            <div className="col-4 col-lg-3 order-3 order-lg-2 mt-4 mt-lg-0">
                                                <div className="stockCounter">
                                                    <button className=" minus" onClick={()=>decreaseQty(item)}>-</button>
                                                    <input type="number"  id="cart-qty" value={item.qty} readOnly />
            
                                                    <button className="  plus" onClick={()=>increaseQty(item)}>+</button>
                                                </div>
                                            </div>
            
                                            
                                            <div className="col-4 col-lg-2 order-4 order-lg-3 mt-4 mt-lg-0">
                                                <p id="card_item_price">₹{item.productDetail.price}</p>
                                            </div>
            
                                            <div className="col-1 col-lg-1 order-2 order-lg-4  mt-lg-0 xmark-div" >
                                                
                                                <i id="delete_cart_item" className="fa-solid fa-xmark" onClick={()=>removeItem(item)}></i>
                                            </div>
            
                                        </div>
                                    </div>
                                    </Fragment>
                                    
                                ))} 
                            
                            
                                
                            </div>

                            <div className="col-12 col-lg-3 my-4">
                                <div id="order_summary">
                                    <h4 style={{marginTop: "-10px;"}}>Order Summary</h4>
                                    <hr style={{marginTop: "22px;"}} />
                                    <p className="mt-5">Subtotal:  <span className="order-summary-values">{cartItem.reduce((acc,item)=>{return acc + item.qty},0)} (Units)</span></p>
                                    <p>Est. Total: <span className="order-summary-values">₹{cartItem.reduce((acc,item)=>{
                                        return acc + parseInt(item.productDetail.price) * item.qty
                                        },0)}</span></p>
                    
                                    <hr  className="mt-5"/>
                                    <button id="checkout_btn" onClick={OrderPlaced} >Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
        </Fragment> 
        : !complete ? <p className='empty-cart'>Your Cart Is Empty!</p>
        : <Fragment> <p className='empty-cart'>Your Order Placed Successfully!</p> </Fragment>



    
   
        
    
  )
}
