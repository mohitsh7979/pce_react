import React from "react";
import Featured_product from "./Featured_product";
import Inspired_Product from "./Inspired_Product";
import bgImage from "../../images/offer-bg.png";

function Home() {
  // Featured_product.map((item) => {
  //   console.log(item);
  // });
  console.log(Featured_product);
  return (
    <>
      <div className="banner">
        <img src="https://wallpapercave.com/wp/wp10668538.jpg" alt="" />
        <div className="inner">
          <div className="container">
            <div className="content">
              <div className="col">
                <p className="sub_text">MEN COLLECTION</p>
                <h3>
                  <span> Show</span>Your
                  <br />
                  Personal<span>Style</span>
                </h3>
                <h4>Fowl sar dry which a above together place</h4>
                <div className="view">
                  <button>View Collection</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature">
        <div className="row">
          <i className="fa-solid fa-sack-dollar"></i>
          <h3>MONEY BACK GURANTEE</h3>
          <p>shall open divide a one</p>
        </div>

        <div className="row">
          <i className="fa-solid fa-truck"></i>
          <h3>FREE DELIVERY</h3>
          <p>shall open divide a one</p>
        </div>

        <div className="row">
          <i className="fa-solid fa-headphones"></i>
          <h3>ALAWAYS SUPPORT</h3>
          <p>shall open divide a one</p>
        </div>

        <div className="row">
          <i className="fa-solid fa-lock"></i>
          <h3>SECURE PAYMENT</h3>
          <p>shall open divide a one</p>
        </div>
      </div>

      <section className="product">
        <h1>FEATURED PRODUCT</h1>
        <br />
        <p>Bring called seed first of third give itself now ment</p>
        <div className="big">
          {Featured_product.map((item) => (
            <div className="box">
              <img src={item.img} alt="" />
              <h4>{item.title}</h4>
              <div className="price">
                <h3 className="new_price">${item.new_price}</h3>
                <span className="old_price">${item.old_price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="offer">
        <img src={bgImage} alt="" />
        <div className="text">
          <h4>ALL MEN'S COLLECTION</h4>
          <h1>50% OFF</h1>
          <button>DISCOVER NOW</button>
          <p>LIMITED TIME OFFER</p>
        </div>
      </section>

      <section className="new_product">
        <h1>NEW PRODUCT</h1>
        <br />
        <p>Bring called seed first of third give itself now ment</p>
      </section>

      <section className="summer">
        <div className="summer-left">
          <div className="item">
            <div className="items">
              <h3>COLLECTION OF 2024</h3>
              <h1>MEN'S SUMMER TSHIRT</h1>
              <img
                src="https://themewagon.github.io/eiser/img/product/new-product/new-product1.png"
                alt=""
              />
              <h2>$120.70</h2>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="summer-right">
          <div className="item">
            <div className="card">
              <img
                src="https://themewagon.github.io/eiser/img/product/new-product/n1.jpg"
                alt=""
              />
              <h4>NIKE LATEST SNEAKER</h4>
              <div className="price">
                <h3 className="new_price">$25.00</h3>
                <span className="old_price">$35.00</span>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="card">
              <img
                src="https://themewagon.github.io/eiser/img/product/new-product/n2.jpg"
                alt=""
              />
              <h4>QUARTZ HAND WATCH</h4>
              <div className="price">
                <h3 className="new_price">$25.00</h3>
                <span className="old_price">$35.00</span>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="card">
              <img
                src="https://themewagon.github.io/eiser/img/product/new-product/n2.jpg"
                alt=""
              />
              <h4>QUARTZ HAND WATCH</h4>
              <div className="price">
                <h3 className="new_price">$25.00</h3>
                <span className="old_price">$35.00</span>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="card">
              <img
                src="https://themewagon.github.io/eiser/img/product/new-product/n2.jpg"
                alt=""
              />
              <h4>QUARTZ HAND WATCH</h4>
              <div className="price">
                <h3 className="new_price">$25.00</h3>
                <span className="old_price">$35.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="inspired">
        <h1>INSPIRED PRODUCT</h1>
        <br />
        <p>Bring called seed first of third give itself now ment</p>
      </div>

      <section className="multi">
        {Inspired_Product.map((item) => (
          <div className="card">
            <img
              src={item.img}
              alt=""
            />
            <h4>{item.title}</h4>
            <div className="price">
              <h3 className="new_price">${item.new_price}</h3>
              <span className="old_price">${item.old_price}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;
