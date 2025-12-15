import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header className="hero">
        <h1>Welcome to AquaFreeze Machines</h1>
        <p>Your trusted supplier of Water & Ice Machines</p>
      </header>

      <div className="categories">
        <Link to="/water-machines" className="category-card">
          <img src="/water machine.avif" alt="Water Machines" />
          <h3>Water Machines</h3>
        </Link>

        <Link to="/ice-machines" className="category-card">
          <img src="/ice machine.jpeg" alt="Ice Machines" />
          <h3>Ice Machines</h3>
        </Link>
      </div>
    </div>
  );
}
