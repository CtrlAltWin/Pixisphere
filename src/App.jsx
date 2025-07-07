import { useEffect, useState } from "react";
import "./index.css";
import NavbarVisibilityContext from "../utils/NavbarVisibilityContext";

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
    <>
      <NavbarVisibilityContext.Provider value={{ showNavbar }}>
          <div>Hello world</div>
      </NavbarVisibilityContext.Provider>
    </>
  );
};

export default App;
