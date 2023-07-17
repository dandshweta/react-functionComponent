import { useEffect, useState } from "react";

const UseEffectExamples = () => {
  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        const count = data.reduce((acc, current) => acc + current.price, 0);
        setTotalPrice(count.toFixed(2));
        setProducts(data);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>My Products</h1>
      <p>Total Price: ₹ {totalPrice}</p>
      {products ? (
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              {item.title}{" "}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
      <h2>My Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default UseEffectExamples;
