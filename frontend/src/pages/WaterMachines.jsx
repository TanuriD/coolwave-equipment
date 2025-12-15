import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WaterMachines() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data.filter(p => p.category === "water")))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="product-page">
      <h1>Water Machines</h1>
      <p className="page-intro">
        Explore our range of water filtration and purification systems.
      </p>

      <div className="ice-machine-grid">
        <Link
          to="/water-machines/ro-filter-machine"
          className="ice-machine-card"
        >
          <div className="ice-machine-image-wrapper">
            <img src="/ro filter machine.png" alt="RO Filter Machine" />
          </div>
          <h3>RO Filter Machine</h3>
        </Link>
      </div>

      {products.length > 0 && (
        <>
          <h2 style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>Other Water Products</h2>
          <div className="product-list">
            {products.map(p => (
              <div key={p._id} className="product-card">
                <img src={p.image} alt="" />
                <h3>{p.name}</h3>
                <p>{p.type}</p>
                <p><strong>Price: Rs {p.price}</strong></p>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
