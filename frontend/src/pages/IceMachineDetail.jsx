import { useParams, Link } from "react-router-dom";

// Ice machine data - in a real app, this would come from an API
const iceMachinesData = {
  "cube-ice-machine": {
    name: "Cube Ice Machine",
    image: "/cube ice machine3.avif",
    iceImage: "/cube ice image.jpeg",
    price: "Rs.190,000/= upwards",
    description: "High-performance cube ice machine perfect for commercial and residential use. Produces clear, hard ice cubes that last longer. Features automatic cleaning cycle, energy-efficient operation, and compact design. Ideal for restaurants, bars, hotels, and homes.",
    descriptionSinhala: "වාණිජ හා නේවාසික භාවිතය සඳහා සම්පූර්ණ කියුබ් අයිස් යන්ත්‍රයකි. දිගුකාලීනව පවතින පැහැදිලි, දැඩි අයිස් කැට නිපදවයි. ස්වයංක්‍රීය පිරිසිදු කිරීමේ චක්‍රය, බලශක්ති කාර්යක්ෂම ක්‍රියාකාරකම් සහ කොම්පැක්ට් නිර්මාණය ඇතුළත් වේ. අවන්හල්, බාර්, හෝටල් සහ නිවාස සඳහා සුදුසුය.",
    descriptionTamil: "வணிக மற்றும் குடியிருப்பு பயன்பாட்டிற்கு சிறந்த உயர் செயல்திறன் கன சதுர பனி இயந்திரம். நீண்ட நேரம் நீடிக்கும் தெளிவான, கடினமான பனி கனசதுரங்களை உற்பத்தி செய்கிறது. தானியங்கி சுத்திகரிப்பு சுழற்சி, ஆற்றல் திறமையான செயல்பாடு மற்றும் கச்சிதமான வடிவமைப்பு ஆகியவற்றைக் கொண்டுள்ளது. உணவகங்கள், பார்கள், ஹோட்டல்கள் மற்றும் வீடுகளுக்கு ஏற்றது."
  },
  "tube-ice-machine": {
    name: "Tube Ice Machine",
    image: "/tube ice machine 4.avif",
    iceImage: "/tube ice image.avif",
    price: "Rs.5,300,000/= upwards",
    description: "Efficient tube ice machine designed for high-volume ice production. Produces cylindrical ice tubes that are perfect for beverages. Features stainless steel construction, easy maintenance, and reliable performance. Great for cafes, restaurants, and commercial establishments.",
    descriptionSinhala: "ඉහළ පරිමාණ අයිස් නිෂ්පාදනය සඳහා නිර්මාණය කරන ලද කාර්යක්ෂම නල අයිස් යන්ත්‍රයකි. පාන සඳහා සම්පූර්ණ සිලින්ඩරාකාර අයිස් නල නිපදවයි. වානේ ඉදිකිරීම්, පහසු නඩත්තුව සහ විශ්වාසදායක කාර්ය සාධනය ඇතුළත් වේ. කැෆේ, අවන්හල් සහ වාණිජ ආයතන සඳහා විශිෂ්ටයි.",
    descriptionTamil: "உயர் அளவு பனி உற்பத்திக்காக வடிவமைக்கப்பட்ட திறமையான குழாய் பனி இயந்திரம். பானங்களுக்கு சிறந்த உருளை வடிவ பனி குழாய்களை உற்பத்தி செய்கிறது. எஃகு கட்டுமானம், எளிதான பராமரிப்பு மற்றும் நம்பகமான செயல்திறன் ஆகியவற்றைக் கொண்டுள்ளது. கஃபேக்கள், உணவகங்கள் மற்றும் வணிக நிறுவனங்களுக்கு சிறந்தது."
  },
  "flake-ice-machine": {
    name: "Flake Ice Machine",
    image: "/flake ice machine 4.webp",
    iceImage: "/flake ice image.jpeg",
    price: "Rs.1,560,000/= upwards",
    description: "Professional flake ice machine ideal for food display and preservation. Produces soft, moldable ice flakes that are perfect for seafood displays, salad bars, and medical applications. Features rapid ice production, hygienic design, and energy-saving technology.",
    descriptionSinhala: "ආහාර ප්‍රදර්ශනය සහ සංරක්ෂණය සඳහා සුදුසු වෘත්තීය පොට්ටල් අයිස් යන්ත්‍රයකි. මාළු ප්‍රදර්ශන, සලාද බාර් සහ වෛද්‍ය යෙදුම් සඳහා සම්පූර්ණ මෘදු, හැඩගැස්විය හැකි අයිස් පොට්ටල් නිපදවයි. වේගවත් අයිස් නිෂ්පාදනය, සනීපාරක්ෂක නිර්මාණය සහ බලශක්ති ඉතිරිකිරීමේ තාක්ෂණය ඇතුළත් වේ.",
    descriptionTamil: "உணவு காட்சி மற்றும் பாதுகாப்பிற்கு சிறந்த தொழில்முறை துகள் பனி இயந்திரம். கடல் உணவு காட்சிகள், சாலட் பார்கள் மற்றும் மருத்துவ பயன்பாடுகளுக்கு சிறந்த மென்மையான, வடிவமைக்கக்கூடிய பனி துகள்களை உற்பத்தி செய்கிறது. விரைவான பனி உற்பத்தி, சுகாதார வடிவமைப்பு மற்றும் ஆற்றல் சேமிப்பு தொழில்நுட்பம் ஆகியவற்றைக் கொண்டுள்ளது."
  },
  "direct-cool-block-ice-machine": {
    name: "Direct Cool Block Ice Machine",
    image: "/direct cool block ice machine 4.png",
    iceImage: "/direct cool block ice.jpeg",
    price: "Rs.5,300,000/= upwards",
    description: "Heavy-duty direct cool block ice machine for large-scale ice production. Produces large block ice perfect for fishing, food processing, and industrial applications. Features robust construction, high capacity, and reliable direct cooling system. Built to last in demanding environments.",
    descriptionSinhala: "විශාල පරිමාණ අයිස් නිෂ්පාදනය සඳහා බර-කාර්ය ඍජු සිසිලන බ්ලොක් අයිස් යන්ත්‍රයකි. මාළු අල්ලා ගැනීම, ආහාර සැකසීම සහ කාර්මික යෙදුම් සඳහා සම්පූර්ණ විශාල බ්ලොක් අයිස් නිපදවයි. ශක්තිමත් ඉදිකිරීම්, ඉහළ ධාරිතාව සහ විශ්වාසදායක ඍජු සිසිලන පද්ධතිය ඇතුළත් වේ. දැඩි පරිසරවල දිගුකාලීනව පවතින ලෙස නිර්මාණය කර ඇත.",
    descriptionTamil: "பெரிய அளவிலான பனி உற்பத்திக்கான கனரக நேரடி குளிரூட்டும் தொகுதி பனி இயந்திரம். மீன்பிடித்தல், உணவு பதப்படுத்துதல் மற்றும் தொழில்துறை பயன்பாடுகளுக்கு சிறந்த பெரிய தொகுதி பனியை உற்பத்தி செய்கிறது. வலுவான கட்டுமானம், உயர் திறன் மற்றும் நம்பகமான நேரடி குளிரூட்டும் அமைப்பு ஆகியவற்றைக் கொண்டுள்ளது. கடுமையான சூழல்களில் நீடிக்கும் வகையில் கட்டப்பட்டது."
  },
  "cold-room": {
    name: "Cold Room",
    image: "/cold room.jpeg",
    iceImage: null,
    price: "Rs 1,000,000/= upwards",
    description:
      "High-performance cold room designed for reliable temperature-controlled storage. Ideal for supermarkets, hotels, restaurants, and food processing plants. Features insulated panels, efficient refrigeration units, and precise temperature control for long-term preservation.",
    descriptionSinhala:
      "විශ්වාසදායක උෂ්ණත්ව පාලනය කළ ගබඩා කිරීම සඳහා නිර්මාණය කළ උසස් කාර්ය සාධනාත්මක ශීත කාමරයකි. සුපිරි වෙළඳසැල්, හෝටල්, අවන්හල් සහ ආහාර සැකසීමේ ශාලා සඳහා ඉතා සුදුසුය. උෂ්ණත්වය දිගු කාලීනව පාලනය කිරීම සඳහා උෂ්ණ රෝධිත පැනල්, කාර්යක්ෂම සිසිලන ඒකක සහ නියමිත උෂ්ණත්ව පාලනය අඩංගු වේ.",
    descriptionTamil:
      "நம்பகமான வெப்பநிலை கட்டுப்பாட்டுடன் கூடிய சேமிப்பிற்காக வடிவமைக்கப்பட்ட உயர்தர கோல்டு ரூம். சூப்பர் மார்க்கெட்கள், ஹோட்டல்கள், உணவகங்கள் மற்றும் உணவு பதப்படுத்தும் ஆலைகளுக்கு சிறந்தது. நீண்டகால பாதுகாப்பிற்காக சீராகத் தங்கியுள்ள வெப்பநிலையை வழங்கும் பரிசோதிக்கப்பட்ட தணிக்கைக் குழாய்கள், திறமையான குளிரூட்டும் பிரிவுகள் மற்றும் துல்லியமான வெப்பநிலை கட்டுப்பாட்டைக் கொண்டது."
  }
};

export default function IceMachineDetail() {
  const { machineId } = useParams();
  const machine = iceMachinesData[machineId];

  if (!machine) {
    return (
      <div className="page-section">
        <h1>Machine Not Found</h1>
        <p>The ice machine or cold room you're looking for doesn't exist.</p>
        <Link to="/ice-machines" className="back-link">
          ← Back to Ice Machines & Cold Rooms
        </Link>
      </div>
    );
  }

  return (
    <div className="machine-detail">
      <Link to="/ice-machines" className="back-link">
        ← Back to Ice Machines & Cold Rooms
      </Link>
      
      <div className="machine-detail-content">
        <div className="machine-detail-images">
          <div className="machine-detail-image">
            <h3>Machine</h3>
            <img src={machine.image} alt={machine.name} />
          </div>
          {machine.iceImage && (
            <div className="machine-detail-image">
              <h3>Ice Type</h3>
              <img src={machine.iceImage} alt={`${machine.name} - Ice`} />
            </div>
          )}
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

