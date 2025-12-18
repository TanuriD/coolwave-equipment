import { useParams, Link } from "react-router-dom";

// Water machine data - in a real app, this would come from an API
const waterMachinesData = {
  "ro-plants": {
    name: "RO Plants",
    image: "/ro plants image1.jpeg",
    price: "Rs 250,000/= upwards",
    description:
      "Industrial RO plant designed for high-capacity water purification. Delivers consistently pure water for factories, bottling plants, hotels, and large institutions. Features multi-stage filtration, durable components, and efficient operation for continuous use.",
    descriptionSinhala:
      "උසස් ධාරිතාවෙන් ජල පිරිසිදු කිරීම සඳහා නිර්මාණය කළ කාර්මික RO පර්යන්තයකි. කර්මාන්තශාලා, බෝතල්ගත කිරීමේ ශාලා, හෝටල් සහ විශාල ආයතන සඳහා නිතරම පිරිසිදු ජලය සපයයි. බහු-අදියර පෙරීමේ පද්ධති, දිගුකාලීන කොටස් සහ ඵලදායී ක්‍රියාකාරකම් අඩංගු වේ.",
    descriptionTamil:
      "அதிக கொள்ளளவு நீர் சுத்திகரிப்பிற்காக வடிவமைக்கப்பட்ட தொழில்துறை RO தாவரம். தொழிற்சாலைகள், பாட்டிலிங் ஆலைகள், ஹோட்டல்கள் மற்றும் பெரிய நிறுவனங்களுக்கு இடையறாத சுத்தமான நீரைக் கிடைக்கச் செய்கிறது. பல நிலை வடிகட்டுதல், நீடித்த கூறுகள் மற்றும் தொடர்ந்து இயங்குவதற்கான திறமையான செயல்பாடு ஆகியவற்றைக் கொண்டுள்ளது.",
  },
};

export default function WaterMachineDetail() {
  const { machineId } = useParams();
  const machine = waterMachinesData[machineId];

  if (!machine) {
    return (
      <div className="page-section">
        <h1>Machine Not Found</h1>
        <p>The Industrial RO machine you're looking for doesn't exist.</p>
        <Link to="/water-machines" className="back-link">
          ← Back to Industrial RO Machines
        </Link>
      </div>
    );
  }

  return (
    <div className="machine-detail">
      <Link to="/water-machines" className="back-link">
        ← Back to Industrial RO Machines
      </Link>
      
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

