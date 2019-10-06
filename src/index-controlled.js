import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import validator from "./validation";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameValid, setNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [messageValid, setMessageValid] = useState(null);

  const submitAllowed = nameValid == true && emailValid == true && messageValid == true;

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
        setNameValid(!validator.validateName(name));
        break;
      case "email":
        setEmailValid(!validator.validateEmail(email));
        break;
      case "message":
        setMessageValid(!validator.validateMessage(message));
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
          {nameValid == true ? "Please enter your name" : null}
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
          {emailValid == true ? "Please enter a valid email address" : null}
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
          {messageValid == true ? "Please enter a message" : null}
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
