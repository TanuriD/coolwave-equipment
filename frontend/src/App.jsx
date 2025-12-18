import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WaterMachines from "./pages/WaterMachines";
import WaterMachineDetail from "./pages/WaterMachineDetail";
import IceMachines from "./pages/IceMachines";
import IceMachineDetail from "./pages/IceMachineDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/water-machines" element={<WaterMachines />} />
        <Route path="/water-machines/:machineId" element={<WaterMachineDetail />} />
        <Route path="/ice-machines" element={<IceMachines />} />
        <Route path="/ice-machines/:machineId" element={<IceMachineDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
