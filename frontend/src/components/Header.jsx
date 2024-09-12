import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({cartItem}) {
  return (
    <header>
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
    <a className="navbar-brand" href="brand">Aesthete Homes</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <Link to={"/"} className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/products"} className="nav-link" href="#">Products</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="aboutbutton">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="faq">FAQ</a>
        </li>
      </ul>
      <div className="d-flex" role="search">
        
        <Link to={"/cart"} className="btn">
        <div className='cart-icon'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='cart-count'>{cartItem.length}</span>
        </div>
        
        </Link>
        <button className="btn">Login</button>
      </div>
    </div>
  </div>
</nav>
        </header>
  )
}
