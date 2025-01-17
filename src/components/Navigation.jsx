import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    //add eventlistener for click
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      //remove eventlistener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navigation">
      <h1>CarolinaJakobsson</h1>
      <div className="dropDown" ref={menuRef}>
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`navi ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Project Spotlight
          </Link>
          <Link
            to="/"
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            The Essence of Me
          </Link>
          <Link
            to="/"
            className="nav-button"
            onClick={() => setIsMenuOpen(false)}
          >
            My Chamber of Creativity
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
