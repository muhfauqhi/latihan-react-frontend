import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");

  const sendPasswordLink = () => {
    if (!email) {
      setError("Email can't be empty");
    } else {
      axios
        .put("http://localhost:3001/forgotpassword", { email: email })
        .then((res) => {
          console.log(res);
          setEmail("");
          setAlert("Please check your email");
          setTimeout(() => {
            setAlert("");
          }, 3000);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              {alert && (
                <div className="alert alert-primary">
                  <p>{alert}</p>
                </div>
              )}
              {error && (
                <div className="alert alert-danger">
                  <p>{error}</p>
                </div>
              )}
              <div className="card-body">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    placeholder="Email"
                    onChange={onChangeEmail}
                    value={email}
                  ></input>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button
                      className="btn btn-primary"
                      onClick={sendPasswordLink}
                    >
                      Send
                    </button>
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

export default ForgotPassword;
