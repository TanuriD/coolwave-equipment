import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header className="hero">
        <h1>Welcome to Greenery Tech (Pvt) Ltd</h1>
        <p>Your trusted supplier of Industrial RO Machines, Ice Machines & Cold Rooms</p>
      </header>

      <div className="categories">
        <Link to="/ice-machines" className="category-card">
          <img src="/ice machine.jpeg" alt="Ice Machines & Cold Rooms" />
          <h3>Ice Machines & Cold Rooms</h3>
        </Link>

        <Link to="/water-machines" className="category-card">
          <img src="/ro equipments.jpeg" alt="Industrial RO Machines" />
          <h3>Industrial RO Machines</h3>
        </Link>
      </div>
    </div>
  );
}
