import React, { useEffect, useState } from "react";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Products</h2>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => (
          <div key={product._id} className="border p-2 mb-3 rounded-md">
            <h4 className="font-semibold">{product.name}</h4>
            <p>{product.description}</p>
            <p>₹{product.price}</p>
            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
              className="w-24 h-auto"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default AllProducts;
