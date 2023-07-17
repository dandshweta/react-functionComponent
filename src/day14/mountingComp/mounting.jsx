import { useEffect, useState } from "react";
import "./productList.css";
const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) {
    return <p>Please wait, while we are loading product</p>;
  }

  // return (
  //   <div>
  //     <h1>My Products</h1>
  //     {products.map((item) => {
  //       return (
  //         <div key={item.id}>
  //           <p>{item.title}</p>

  //           <img src={item.image} alt={item.title} />
  //           <p>{item.image}</p>
  //           <p>₹ {item.price}</p>
  //           <p>Category: {item.category}</p>
  //           <p>Description: {item.description}</p>
  //           <p>Rating: {item.rating.rate}</p>
  //           <p>Total Ratings: {item.rating.count}</p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div className="product-list-container">
      <h1>My Products</h1>
      {products.map((item) => (
        <div className="product-item" key={item.id}>
          <p className="product-title">{item.title}</p>
          <img src={item.image} alt={item.title} />
          <p className="product-price">₹ {item.price}</p>
          <p className="product-category">Category: {item.category}</p>
          <p className="product-description">Description: {item.description}</p>
          <p className="product-rating">Rating: {item.rating.rate}</p>
          <p className="product-rating">Total Ratings: {item.rating.count}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
