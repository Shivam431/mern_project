import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../store/AuthContext";

export const NavBar = () => {

  const { isLoggedIn } = useAuth();
  return (
    <header>
      <div className="container">
        <div className="logo">
          <NavLink to="/">Logo</NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            {
              isLoggedIn ? <li>
                <NavLink to="/logout">LogOut</NavLink>
              </li> :
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Sign Up</NavLink>
                  </li>
                </>
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
