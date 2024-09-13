import React, { Fragment } from 'react'

export default function Footer() {
  return (
    <Fragment>
        <footer>
            <div className='container footer-container'>
                <div className='row'>
                    <div className='col-12 col-md-6 footer-content-col' >
                        <div className='footer-content pt-5'>
                            <h1>Asthete Homes</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloribus suscipit quam distinctio accusamus at optio! Molestiae, cupiditate iusto, soluta molestias architecto ipsa quae dolorem, non temporibus dolorum accusantium odit</p>
                        </div>
                    </div>

                    <div className='col-12 col-md-3 footer-content-col' >
                        <div className='footer-content pt-5'>
                            <h3>Quick Links</h3>
                            <ul>
                                <li>About</li>
                                <li>Cart</li>
                                <li>Checkout</li>
                                <li>Contact</li>
                                <li>My Account</li>
                            </ul>

                        </div>
                    </div>

                    <div className='col-12 col-md-3 footer-content-col' >
                        <div className='footer-content pt-5'>
                            <h3>Site Links</h3>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Shipping Details</li>
                                <li>Offers Coupons</li>
                                <li>Terms & Conditions</li>
                                <li>Shop</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 footer-content-col' >
                        <div className='footer-content pt-5'>
                            <h3>Follow Us On</h3>
                            <div className='footer-icons'>
                                <i class="fa-solid fa-envelope"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-amazon"></i>
                                <i class="fa-brands fa-facebook"></i>
                            </div>
                         
                        </div>
                    </div>

                    <div className='col-12 col-md-3 footer-content-col' >
                        <div className='footer-content pt-5'>
                            <h3>Address</h3>
                            <p>
                            XYZ Corporation
                            1234 Elm Street
                            Suite 567
                            Springfield, IL 62704
                            USA
                            </p>

                        </div>
                    </div>

                    {/* <div className='col-12 col-md-3 footer-content-col' >
                        <div className='footer-content pt-5'>
                            <h3>Site Links</h3>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Shipping Details</li>
                                <li>Offers Coupons</li>
                                <li>Terms & Conditions</li>
                                <li>Shop</li>
                            </ul>

                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    </Fragment>
  )
}
