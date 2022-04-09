import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/MyCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Admin from "./components/Admin";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Doctors />
      <Reviews />
      <Appointment />
      {/* <Admin /> */}
      <Footer/>
    </Router>
  );
}

export default App;
