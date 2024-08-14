import React, { Fragment, useEffect, useState } from 'react'
import FeaturedProducts from '../components/featuredProducts'


export default function Home() {

    const[featuredProducts,setFeaturedProducts]=useState([])

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+"/featuredproducts")
        .then(res=>res.json())
        .then(res=>setFeaturedProducts(res.FeaturedProducts))
    },[])

  return (
    <Fragment>
        <div className="container mb-5" >
            <div className="row" >
                <div className="col-lg-10 col-12 body-row">

                    {/*---------- main div start---------  */}

                    <div className="row">
                        <div className="col-md-6 col-12 ad-cointainer"> 
                            <div className="top-heading">MODERN DESIGN 
                                <br/> MEETS COZY  <br/> COMFORT
                            </div>
                            <div className="main-Subhead">
                                Create Your Perfect Space
                                {/* <hr /> */}
                            </div>
                        </div>
                        <div className="col-md-6 col-12 carousel-container">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" >
                                        <img src="./images/pot.jpg" className='d-block w-100' alt="pot" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./images/lamp(1).jpg" className='d-block w-100' alt="lamp" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./images/fountain(3).jpg" alt="fountain" />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"            data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*---------- main div end---------  */}

                    <section className='Featured-Products px-0 container'>
                        <div className='row product-inner   mt-3 collection'>
                            <div className='product-inner-head'> 
                                <h2>Featured Product</h2>
                            </div>
                            {featuredProducts.map((element)=> <FeaturedProducts featuredProducts={element}/>)}
                                
                        </div>
                       
                    </section>


                </div>
            </div>
            
        </div>

        {/* <div style={{height:"500px"}}></div> */}
    </Fragment>
    
  )
}
