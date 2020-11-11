import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [error, setError] = useState("");

  const changeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setError("");
  };

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const submitRegister = () => {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3001/register", data)
      .then((result) => {
        if (result) {
          if (result.data) {
            setUsername("");
            setEmail("");
            setPassword("");
            setAlert(result.data.message);
            setTimeout(() => {
              setAlert("");
            }, 3000);
          }
        }
      })
      .catch((err) => {
        const error = err.response.data.message;
        setError(error);
      });
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                {error && (
                  <div className="alert alert-danger">
                    <p>{error}</p>
                  </div>
                )}
                {alert && (
                  <div className="alert alert-primary">
                    <p>{alert}</p>
                  </div>
                )}
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={changeUsername}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={changeEmail}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={changePassword}
                  ></input>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <button
                      className="btn btn-primary"
                      onClick={submitRegister}
                    >
                      Register
                    </button>
                  </div>
                  <div className="col-md-6 text-right">
                    <Link to="/login">Already have Account?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
