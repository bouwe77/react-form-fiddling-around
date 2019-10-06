import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import validator from "./validation";
import { VALID, INVALID, UNDETERMINED } from "./validationStatuses";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameValid, setNameValid] = useState(UNDETERMINED);
  const [emailValid, setEmailValid] = useState(UNDETERMINED);
  const [messageValid, setMessageValid] = useState(UNDETERMINED);

  const submitAllowed = nameValid === VALID && emailValid === VALID && messageValid === VALID;
  console.log(nameValid, emailValid, messageValid, submitAllowed);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Send to server:", [name, email, message]);
  }

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setNameValid(UNDETERMINED);
        setName(event.target.value);
        break;
      case "email":
        setEmailValid(UNDETERMINED);
        setEmail(event.target.value);
        break;
      case "message":
        setMessageValid(UNDETERMINED);
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleBlur(event) {
    switch (event.target.name) {
      case "name":
        setNameValid(validator.validateName(name) ? VALID : INVALID);
        break;
      case "email":
        setEmailValid(validator.validateEmail(email) ? VALID : INVALID);
        break;
      case "message":
        setMessageValid(validator.validateMessage(message) ? VALID : INVALID);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {nameValid === INVALID ? "Please enter your name" : null}
        </div>
        <div>
          <label>Email address</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {emailValid === INVALID ? "Please enter a valid email address" : null}
        </div>
        <div>
          <label>Message</label>
          <textarea
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {messageValid === INVALID ? "Please enter a message" : null}
        </div>
        <div>
          <button type="submit" disabled={!submitAllowed}>
            OK
          </button>
        </div>
      </form>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
