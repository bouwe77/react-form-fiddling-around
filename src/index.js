import React, { useState } from "react";
import ReactDOM from "react-dom";

import validator from "./validation";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  const everythingValid = !usernameError && !passwordError && !confirmPasswordError;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username, password);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
    if (usernameError) validateUsername(event.target.value);
  }

  function handleUsernameBlur(event) {
    validateUsername(event.target.value);
  }

  function validateUsername(username) {
    const [isValid, errorMessage] = validator.validateUsername(username);
    if (!isValid) setUsernameError(errorMessage);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    if (passwordError) validatePassword(event.target.value);
  }

  function handlePasswordBlur(event) {
    validatePassword(event.target.value);
  }

  function validatePassword(password) {
    const [isValid, errorMessage] = validator.validatePassword(password);
    if (!isValid) setPasswordError(errorMessage);
  }

  function handleConfirmPasswordBlur(event) {
    const [isValid, errorMessage] = validator.validatePasswordsMatch(
      password,
      event.target.value
    );
    if (!isValid) setConfirmPasswordError(errorMessage);
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" onChange={handleUsernameChange} onBlur={handleUsernameBlur} />
          {usernameError}
        </label>
        <br />
        <label>
          Password
          <input type="text" onChange={handlePasswordChange} onBlur={handlePasswordBlur} />
          {passwordError}
        </label>
        <br />
        <label>
          Confirm password
          <input type="text" onBlur={handleConfirmPasswordBlur} />
          {confirmPasswordError}
        </label>
        <div>
          <button type="submit" disabled={!everythingValid}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
