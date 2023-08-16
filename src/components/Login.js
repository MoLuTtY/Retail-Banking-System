import "./Login.css";
import React, { useState } from "react";
import login from "../components/images/login.jpeg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "employee" && password === "employee") {
      console.log("Employee Login successful");
    } else if (username === "customer" && password === "customer") {
      console.log("customer Login successful");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <a className="navbar-brand" href="#">
            ABCD BANK
          </a>
        </div>
      </nav>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img className="img-fluid" src={login} alt="login" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="text-center">
                  <h3 className="mb-5">Login</h3>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label className="form-label" for="form1Example13">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <label className="form-label" for="form1Example23">
                    Password
                  </label>
                  {error && <p className="error">{error}</p>}
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-lg text-uppercase "
                    type="submit"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
