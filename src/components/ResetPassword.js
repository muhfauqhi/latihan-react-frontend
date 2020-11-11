import axios from "axios";
import React, { useState } from "react";

const ResetPassword = (props) => {
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) {
      setErrorPassword("Password can't be empty");
    } else {
      setErrorPassword("");
    }
  };

  const onChangeConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (!value) {
      setErrorConfirmPassword("Confirm password can't be empty");
    } else if (password !== value) {
      setErrorConfirmPassword("Confirm password not match!");
    } else {
      setErrorConfirmPassword("");
    }
  };

  const saveNewPassword = () => {
    const token = props.match.params.token;
    const data = {
      password: password,
      token: token,
    };
    axios
      .put("http://localhost:3001/resetpassword", data)
      .then((result) => {
        if (result) {
          setPassword("");
          setConfirmPassword("");
          setAlert("Password successfully updated");
          setTimeout(() => {
            setAlert("");
          }, 3000);
        }
      })
      .catch((err) => {
        setAlert(err);
        setPassword("");
        setConfirmPassword("");
      });
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                {alert && (
                  <div className="alert alert-primary">
                    <p>{alert}</p>
                  </div>
                )}
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New Password"
                    onChange={onChangePassword}
                    value={password}
                  ></input>
                  {errorPassword && (
                    <p className="text-danger">{errorPassword}</p>
                  )}
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={onChangeConfirmPassword}
                    value={confirmPassword}
                  ></input>
                  {errorConfirmPassword && (
                    <p className="text-danger">{errorConfirmPassword}</p>
                  )}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button
                      className="btn btn-primary"
                      onClick={saveNewPassword}
                    >
                      Save
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

export default ResetPassword;
