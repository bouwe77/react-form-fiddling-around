import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import validator from "./validation";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Send to server:", [name, email, message]);
  }

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "message":
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleBlur(event) {
    switch (event.target.name) {
      case "name":
        if (!validator.validateName(name)) {
          setNameError("Name invalid");
          return;
        } else setNameError(null);
        break;
      case "email":
        if (!validator.validateEmail(email)) {
          setEmailError("Email invalid");
          return;
        } else setEmailError(null);
        break;
      case "message":
        if (!validator.validateMessage(message)) {
          setMessageError("Message invalid");
          return;
        } else setMessageError(null);
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
          {nameError}
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
          {emailError}
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
          {messageError}
        </div>
        <div>
          <button type="submit">OK</button>
        </div>
      </form>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
