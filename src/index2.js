import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [robot, setRobot] = useState(true);
  const [isValid, setIsValid] = useState(false);

  function changeUsername(event) {
    setUsername(event.target.value);
    setIsValid(validate(event.target.value, password, robot));
  }

  function changePassword(event) {
    setPassword(event.target.value);
    setIsValid(validate(username, event.target.value, robot));
  }

  function changeRobot(event) {
    const newRobotValue = !event.target.checked;
    setRobot(newRobotValue);
    setIsValid(validate(username, password, newRobotValue));
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(username, password, robot);
  }

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={submitForm}>
        <div>
          <label>Username</label>{" "}
          <input type="text" value={username} onChange={changeUsername} />
        </div>
        <div>
          <label>Password</label>{" "}
          <input type="password" value={password} onChange={changePassword} />
        </div>
        <div>
          <input type="checkbox" checked={!robot} onChange={changeRobot} />
          <label>I am not a robot</label>
        </div>
        <div>
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

function validate(username, password, robot) {
  const usernameValid =
    username.length >= 3 && username.length <= 50 && /[A-Za-z0-9]/.test(username);
  const passwordValid = password.length > 0 && password.length <= 50;
  const robotValid = !robot;

  return usernameValid && passwordValid && robotValid;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
