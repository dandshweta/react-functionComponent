import { useState } from "react";

const ProductView = () => {
  const [products, setProducts] = useState([]);

  const onAddNewProduct = () => {
    setProducts((prevState) => {
      return [
        ...prevState,
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
      <button onClick={onAddNewProduct}>Add Product</button>
    </div>
  );
};

export default ProductView;
