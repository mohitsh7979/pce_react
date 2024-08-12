import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function DataFetching() {
  const [product_data, setproduct] = useState([]);

  const FetchApi = async () => {
    const product = await fetch("https://dummyjson.com/products");
    const Json_Product = await product.json();
    setproduct(Json_Product.products);
  };

  console.log(product_data);

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div className="container container1">
      {product_data.map((item,index) => (
        <div className="card" key={index}>
          <img src={item.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h4>Rs.{item.price}</h4>
            <p className="card-text">
              {item.description.slice(0,30)}...
            </p>
            <Link to={`/desc/${item.id}`} className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataFetching;
