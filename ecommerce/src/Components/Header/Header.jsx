import React from "react";

function Header() {
  return (
    <>
      <div className="nav">
        <div className="contact">
          <ul>
            <li>Phone: +01 256 25 235</li>
            <li>email: info@eiser.com</li>
          </ul>
        </div>
        <div className="option">
          <ul>
            <li>GIFT CARD</li>
            <li>TRACK ORDER</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>

      <div className="header">
        <div className="left">
          <img
            src="https://themewagon.github.io/eiser/img/logo.png"
            alt=""
            className="logo"
          />
        </div>
        <div className="mid">
          <ul>
            <li>
              <a href="./main.html">Home</a>
            </li>
            <li className="shop">
              <span>SHOP</span>
              <div className="dropdown">
                <ul>
                  <li className="sub">
                    <span>SHOP CATEGORY</span>
                  </li>

                  <li className="sub">
                    <span>PRODUCT DETAILS</span>
                  </li>

                  <li className="sub">
                    <span>PRODUCT CHECKOUT</span>
                  </li>

                  <li className="sub">
                    <span>SHOPPING CART</span>
                  </li>
                </ul>
              </div>
            </li>
            <li className="shop">
              <span>BLOG</span>
              <div className="dropdown">
                <ul>
                  <li className="sub">
                    <span>BLOG</span>
                  </li>

                  <li className="sub">
                    <span>BLOG DETAILS</span>
                  </li>
                </ul>
              </div>
            </li>
            <li className="shop">
              <span>
                <a href="./pages.html">PAGES</a>
              </span>
              <div className="dropdown">
                <ul>
                  <li className="sub">TRACKING</li>
                  <li className="sub">ELEMENTS</li>
                </ul>
              </div>
            </li>
            <li>
              <a href="./contact.html">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
