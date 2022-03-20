import "./styles.css";
import "bootstrap/js/src/collapse.js";

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-expand-md navbar-light bg-primary main-nav">
        <div className="container-fluid">
          <a className="nav-logo" href="link">
            <h1>Carros Top</h1>
          </a>

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
                <a href="link" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="link">Catálogo</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
