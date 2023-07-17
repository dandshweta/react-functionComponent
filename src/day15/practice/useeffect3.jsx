import { useEffect, useState } from "react";

const ProductList7 = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Please wait, while we are loading products...</p>;
  }

  if (!products) {
    return <p>Failed to fetch products.</p>;
  }

  return (
    <div>
      <h1>My Products</h1>
      {products.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.image} alt={item.title} />
          <p>₹ {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList7;
