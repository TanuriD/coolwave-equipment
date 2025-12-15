import { useParams, Link } from "react-router-dom";

// Water machine data - in a real app, this would come from an API
const waterMachinesData = {
  "ro-filter-machine": {
    name: "RO Filter Machine",
    image: "/ro filter machine.png",
    price: "Rs 85,000",
    description: "Advanced Reverse Osmosis (RO) water filtration system that removes impurities, chemicals, and contaminants from water. Provides clean, safe, and great-tasting drinking water. Features multi-stage filtration process, easy installation, and low maintenance. Perfect for homes, offices, and commercial establishments.",
    descriptionSinhala: "ජලයෙන් අපවිත්‍රතා, රසායනික ද්‍රව්‍ය සහ දූෂණ ද්‍රව්‍ය ඉවත් කරන උසස් Reverse Osmosis (RO) ජල පෙරීමේ පද්ධතියකි. පිරිසිදු, ආරක්ෂිත සහ රසවත් පානීය ජලය සපයයි. බහු-අදියර පෙරීමේ ක්‍රියාවලිය, පහසු ස්ථාපනය සහ අඩු නඩත්තුව ඇතුළත් වේ. නිවාස, කාර්යාල සහ වාණිජ ආයතන සඳහා සම්පූර්ණයි.",
    descriptionTamil: "நீரிலிருந்து மாசுகள், இரசாயனங்கள் மற்றும் மாசுபாடுகளை அகற்றும் மேம்பட்ட Reverse Osmosis (RO) நீர் வடிகட்டும் அமைப்பு. சுத்தமான, பாதுகாப்பான மற்றும் சுவையான குடிநீரை வழங்குகிறது. பல நிலை வடிகட்டுதல் செயல்முறை, எளிதான நிறுவல் மற்றும் குறைந்த பராமரிப்பு ஆகியவற்றைக் கொண்டுள்ளது. வீடுகள், அலுவலகங்கள் மற்றும் வணிக நிறுவனங்களுக்கு சிறந்தது."
  }
};

export default function WaterMachineDetail() {
  const { machineId } = useParams();
  const machine = waterMachinesData[machineId];

  if (!machine) {
    return (
      <div className="page-section">
        <h1>Machine Not Found</h1>
        <p>The water machine you're looking for doesn't exist.</p>
        <Link to="/water-machines" className="back-link">← Back to Water Machines</Link>
      </div>
    );
  }

  return (
    <div className="machine-detail">
      <Link to="/water-machines" className="back-link">← Back to Water Machines</Link>
      
      <div className="machine-detail-content">
        <div className="machine-detail-images">
          <div className="machine-detail-image">
            <h3>Machine</h3>
            <img src={machine.image} alt={machine.name} />
          </div>
        </div>
        
        <div className="machine-detail-info">
          <h1>{machine.name}</h1>
          <div className="machine-price">{machine.price}</div>
          <div className="machine-description">
            <h3>Description</h3>
            <p>{machine.description}</p>
            
            <div className="description-translations">
              <div className="description-language">
                <h4>සිංහල (Sinhala)</h4>
                <p>{machine.descriptionSinhala}</p>
              </div>
              
              <div className="description-language">
                <h4>தமிழ் (Tamil)</h4>
                <p>{machine.descriptionTamil}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

