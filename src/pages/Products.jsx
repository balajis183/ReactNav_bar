// // Products.jsx
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         setProducts(response.data);
//       } catch (err) {
//         setError("Failed to fetch products.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Available Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{ width: "100px" }}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Products;

// Products.jsx
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         setProducts(response.data);
//       } catch (err) {
//         setError("Failed to fetch products.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="product-grid">
//       <h1>Available Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id} className="product-item">
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{ width: "100px" }}
//             />
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Products;

import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 id="heading">Available Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px" }}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
