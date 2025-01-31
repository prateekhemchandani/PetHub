import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./images/logo.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Use navigate for redirection

  useEffect(() => {
    // Function to update login state
    const updateLoginState = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    updateLoginState(); // Check login state on mount

    // Listen for changes in localStorage (login/logout)
    window.addEventListener("storage", updateLoginState);

    return () => {
      window.removeEventListener("storage", updateLoginState);
    };
  }, []);

  const handleLogout = () => {
    // Clear login tokens
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("isLoggedIn");

    // Update state and notify other components
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage"));

    // Redirect user to login page
    navigate("/login");
  };

  return (
    <div className="navbar-container">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PetHub Logo" />
          <p>PetHub</p>
        </Link>
      </div>
      <div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Events">Events</Link></li>
          <li><Link to="/PetCards">Pets</Link></li>
          <li><Link to="/Shelters">Shelters</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="Navbar-button">
             Logout
          </button>
        ) : (
          <Link to="/login">
            <button type="button" className="Navbar-button">
              Login/SignUp
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
