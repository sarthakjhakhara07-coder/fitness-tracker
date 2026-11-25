import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="container notfound">
      <h1 className="notfound-code">404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
