import { Link } from "react-router-dom";

const waterMachines = [
  {
    id: "ro-plants",
    name: "RO Plants",
    image: "/ro plants image1.jpeg",
  },
];

export default function WaterMachines() {
  return (
    <div className="product-page">
      <h1>Industrial RO Machines</h1>
      <p className="page-intro">
        Explore our range of industrial RO plants for high-capacity water
        purification.
      </p>

      <div className="ice-machine-grid">
        {waterMachines.map((machine) => (
          <Link
            key={machine.id}
            to={`/water-machines/${machine.id}`}
            className="ice-machine-card"
          >
            <div className="ice-machine-image-wrapper">
              <img src={machine.image} alt={machine.name} />
            </div>
            <h3>{machine.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
