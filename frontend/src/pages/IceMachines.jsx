import { Link } from "react-router-dom";

const iceMachines = [
  {
    id: "cube-ice-machine",
    name: "Cube Ice Machine",
    image: "/cube ice machine3.avif"
  },
  {
    id: "tube-ice-machine",
    name: "Tube Ice Machine",
    image: "/tube ice machine 4.avif"
  },
  {
    id: "flake-ice-machine",
    name: "Flake Ice Machine",
    image: "/flake ice machine 4.webp"
  },
  {
    id: "direct-cool-block-ice-machine",
    name: "Direct Cool Block Ice Machine",
    image: "/direct cool block ice machine 4.png"
  }
];

export default function IceMachines() {
  return (
    <div className="product-page">
      <h1>Ice Machines</h1>
      <p className="page-intro">
        Explore our range of commercial and residential ice machines, designed
        for reliability and efficiency.
      </p>

      <div className="ice-machine-grid">
        {iceMachines.map((machine) => (
          <Link
            key={machine.id}
            to={`/ice-machines/${machine.id}`}
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

