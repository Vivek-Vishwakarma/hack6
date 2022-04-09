import "./App.css";
import React from "react"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Admin from "./components/Admin";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Scrolltotop from "./components/Scrolltotop";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={[
            <Header/>,
            <Scrolltotop />,
            <About />,
            <Doctors />,
            <Reviews />,
            <Blog/>,
            <Appointment />,
            <Footer />,
          ]}
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
