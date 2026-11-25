// Navbar.jsx — A reusable functional component for site-wide navigation.
// Demonstrates: semantic <header>/<nav> tags and React Router navigation.

import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // NavLink is like a normal <a> tag but for single-page apps:
  // it changes the URL WITHOUT reloading the page, and it can style
  // the "active" link automatically. Below we add an "active" class
  // when the link matches the current route.
  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    // <header> is a semantic tag for introductory/navigation content.
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="brand">
          🏋️ Fitness Club
        </NavLink>

       
        <nav className="nav-links">
          
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/routines" className={linkClass}>
            Workout Routines
          </NavLink>
          <NavLink to="/calories" className={linkClass}>
            Calorie Tracker
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
