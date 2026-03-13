import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./components/Doctors";
import Appointment from "./pages/Appointment";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Doctors />
      <Appointment />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
