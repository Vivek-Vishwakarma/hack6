import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/MyCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Admin from "./components/Admin";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header/>
        <Doctors />
        <Appointment />
          <Routes>
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/admin" element={<Admin />}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
