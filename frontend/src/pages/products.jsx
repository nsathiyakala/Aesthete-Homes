import React, { Fragment,useState, useEffect }from 'react'
import { Link } from 'react-router-dom'

export default function Products() {

    const [products,setproducts]=useState([])
    
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+"/products")
        .then(res=>res.json())
        .then(res=>setproducts(res.products))
    },[])

  return (
    <Fragment >
        <div className='container'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                       {/* <h2 className='m-5' style={{color:"red"}}>This page is under Development</h2> */}
                        
                        { products.map((products)=>(
                    
                            <Fragment>
                            <div class="col-12 col-md-6 col-lg-4 my-3 product-card-col">
                                <div class="card p-3 rounded">
                                    <img
                                    class="card-img-top mx-auto"
                                    src={products.images[0].images} alt='product-img'
                                    />
                                    <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">
                                        <Link to={"/product/"+ products._id}>{products.name}</Link>
                                    </h5>
                                    <div class="ratings mt-auto">
                                        <div class="rating-outer" >
                                        <div class="rating-inner" style={{width:`${products.reviews/5 * 100}%`}}></div>
                                        </div>
                                    </div>
                                    <p class="card-text">₹{products.price}</p>
                                    {/* <a href="#" id="view_btn" class="btn btn-block">View Details</a> */}
                                    </div>
                                </div>
                            </div>
                            </Fragment>
                
                        ))}  

                    </div>
                </div>
            </div>
        </div>
                
                  

    
       
       
   </Fragment>
  )
}
