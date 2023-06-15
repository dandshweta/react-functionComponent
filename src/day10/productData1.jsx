import { useState } from "react";

const ProductView1 = () => {
  const [products, setProducts] = useState([]);

  const onAddNewProduct = () => {
    setProducts(() => {
      return [
        // ...prevState,
        {
          name: "ABC",
          price: Math.floor(Math.random() * 200) + 1,
        },
      ];
    });
  };

  console.log("Products: ", products);
  return (
    <div>
      <button onClick={onAddNewProduct}>Add Product 1</button>
    </div>
  );
};

export default ProductView1;
