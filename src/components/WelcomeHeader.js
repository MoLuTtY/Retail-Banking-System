import "./WelcomeHeader.css";
import { Link } from "react-router-dom";

const WelcomeHeader = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <a className="navbar-brand" href="#">
            ABCD BANK
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link className="login-navigate" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default WelcomeHeader;
