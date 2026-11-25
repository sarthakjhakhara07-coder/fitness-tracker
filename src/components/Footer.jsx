import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
 
  const currentYear = new Date().getFullYear();

  return (
   
    <footer className="footer">
      <div className="footer-inner container">
       
        <div className="footer-brand">
          <h3>🏋️ Fitness Club</h3>
          <p>Plan your workouts and track your calories — the simple way.</p>
        </div>

        
        <nav className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/routines">Workout Routines</Link>
          <Link to="/calories">Calorie Tracker</Link>
        </nav>

       
        <div className="footer-note">
          <h4>Stay Consistent</h4>
          <p>Small daily efforts add up to big results. Keep going! 💪</p>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© {currentYear} Fitness Club.</p>
      </div>
    </footer>
  );
}

export default Footer;
