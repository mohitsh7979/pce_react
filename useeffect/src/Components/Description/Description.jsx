import React from "react";
import './Description.css';
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

function Description() {
   
    const {id} = useParams();

    const [product_data, setproduct] = useState([]);

    const FetchApi = async () => {
      const product = await fetch("https://dummyjson.com/products");
      const Json_Product = await product.json();
      
      const f_data = Json_Product.products.filter((item)=>item.id==id);
      setproduct(f_data);
    };
  
    useEffect(() => {
      FetchApi();
    }, []);

  return (
    <div>
        {product_data.map((item)=>(
            // console.log(item)
      <main class="container container1">
        <div class="left-column">
          <img data-image="black" src={item.thumbnail} alt="" />
        </div>

        <div class="right-column">
          <div class="product-description">
            <span>{item.title}</span>
            <h1>{item.title}</h1>
            <p>
             {item.description}
            </p>
          </div>

          <div class="product-configuration">
            <div class="product-color">
              <span>Color</span>

              <div class="color-choose">
                <div>
                  <input
                    data-image="red"
                    type="radio"
                    id="red"
                    name="color"
                    value="red"
                    checked
                  />
                  <label for="red">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input
                    data-image="blue"
                    type="radio"
                    id="blue"
                    name="color"
                    value="blue"
                  />
                  <label for="blue">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input
                    data-image="black"
                    type="radio"
                    id="black"
                    name="color"
                    value="black"
                  />
                  <label for="black">
                    <span></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="cable-config">
              <span>Cable configuration</span>

              <div class="cable-choose">
                <button>Straight</button>
                <button>Coiled</button>
                <button>Long-coiled</button>
              </div>

              <a href="#">How to configurate your headphones</a>
            </div>
          </div>

          <div class="product-price">
            <span>Rs.{item.price}</span>
            <Link to={`/cart`} class="cart-btn">
              Add to cart
            </Link>
          </div>
        </div>
      </main>
        ))}
    </div>
  );
}

export default Description;
