import "./styles.css";
import "bootstrap/js/src/collapse.js";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-md navbar-light bg-primary main-nav">
        <div className="container-fluid">
          <Link to="/" className="nav-logo">
            <h1>Carros Top</h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#challenge-navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="challenge-navbar">
            <ul className="navbar-nav offset-md-2 menu">
              <li>
                <NavLink to="/" activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" activeClassName="active">
                  Catálogo
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
