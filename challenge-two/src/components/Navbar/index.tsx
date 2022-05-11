import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="bg-primary nav-container">
      <Link to="/">
        <h1>Github API</h1>
      </Link>
    </div>
  );
};

export default Navbar;
