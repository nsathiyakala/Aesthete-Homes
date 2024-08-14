import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedProducts({featuredProducts}) {
  return (
   <Fragment >
     <div class="col-12 col-md-6 col-lg-4 my-3 product-card-col">
          <div class="card p-3 rounded">
            <img
              class="card-img-top mx-auto"
              src={featuredProducts.images[0].images}
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">
                <Link to={"/featuredproducts/"+ featuredProducts._id}> {featuredProducts.name}</Link>
              </h5>
              <div class="ratings mt-auto">
                <div class="rating-outer" >
                  <div class="rating-inner" style={{width:`${featuredProducts.reviews/5 * 100}%`}}></div>
                </div>
              </div>
              <p class="card-text">₹{featuredProducts.price}</p>
              
            </div>
          </div>
        </div>
       
       
   </Fragment>
  )
}
