import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>AquaFreeze Machines</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/water-machines">Water Machines</Link></li>
        <li><Link to="/ice-machines">Ice Machines</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}
