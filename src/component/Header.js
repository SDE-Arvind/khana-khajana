import FoodFireLogo from "../Images/logo.jpeg";
import { Link } from "react-router-dom"; // imported Link for client side routing
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import { useSelector } from "react-redux";

// Title component for display logo
const Title = () => (
  <Link to="/">
    <img
      className="logo"
      src={FoodFireLogo}
      alt="Khana Khajana"
      title="Khana Khajana"
    />
  </Link>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const navigate = useNavigate();

  // call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");

  // call custom hook useAuth for user is loggedin or not
  const [isLoggedin, setIsLoggedin] = useAuth();

  useEffect(() => {
    // if value of getLocalStorage is equal to null setIsLoggedin to false
    if (getLocalStorage === null) {
      setIsLoggedin(false);
    }
  }, [getLocalStorage, setIsLoggedin])

  // call custom hook useOnline if user is online or not
  const isOnline = useOnline();
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <div className="header">
      <Title />

      {/* if user is logged in then display userName */}
      {isLoggedin && <div className="user-name">Hi {getLocalStorage?.userName}!</div>}

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="cart-icon-container ">
                <i className="fa-solid fa-cart-shopping"></i>
                ({cartItems?.length})
              </div>
            </Link>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  clearLocalStorage()
                  setIsLoggedin(false);
                }}
              >
                Logout<span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span>
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login<span className={isOnline ? "login-btn-green" : "login-btn-red"}> ●</span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Header;
