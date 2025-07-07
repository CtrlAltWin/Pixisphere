import { useEffect, useState } from "react";
import "./index.css";
import NavbarVisibilityContext from "../utils/NavbarVisibilityContext";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarVisibilityContext.Provider value={{ showNavbar }}>
      <Navbar />
      <Outlet />
    </NavbarVisibilityContext.Provider>
  );
};

export default App;
