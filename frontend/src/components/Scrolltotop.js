import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import { Button } from "@mui/material";
import "../App.css";
const Scrolltotop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

 
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <ArrowUpwardIcon style={{fontSize : "3rem"}} className="icon-position icon-style" onClick={goToTop} />
      )}
    </div>
  );
};

export default Scrolltotop;
