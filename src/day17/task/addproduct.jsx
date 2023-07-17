import { useEffect, useState } from "react";

const AddCart = () => {
  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
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

      <ul>
        {products &&
          products.map((item) => (
            <li key={item.id}>
              {item.title}
              {/* <img src={item.image} alt={item.title} /> */}

              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddCart;
