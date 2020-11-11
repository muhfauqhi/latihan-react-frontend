import { useState, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setError("");
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const submitLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:3001/login", data)
      .then((result) => {
        console.log(result.data.token);
        if (result) {
          const token = result.data.token;
          localStorage.setItem("token", token);
          setRedirect(true);
        }
      })
      .catch((err) => {
        const error = err.response.data.message;
        setError(error);
      });
  };

  return (
    <Fragment>
      {redirect && <Redirect to="/dashboard" />}
      <div style={{ marginTop: "200px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card p-4">
                {error && (
                  <div className="alert alert-danger">
                    <p>{error}</p>
                  </div>
                )}
                <div className="card-body">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={onChangeUsername}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={onChangePassword}
                    ></input>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <button className="btn btn-primary" onClick={submitLogin}>
                        Login
                      </button>
                    </div>
                    <div className="col-md-6 text-right">
                      <Link to="/register">Register?</Link>
                    </div>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <p>
                      Forgot password? <Link to="/forgotpassword">Here!</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
