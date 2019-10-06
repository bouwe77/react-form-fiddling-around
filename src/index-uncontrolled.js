import React, { createRef, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import validator from "./validation";

function App() {
  let nameInput = createRef();
  let emailInput = createRef();
  let messageInput = createRef();

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    var name = nameInput.current.value;
    if (!validator.validateName(name)) {
      setNameError("Name invalid");
      return;
    } else setNameError(null);

    var email = emailInput.current.value;
    if (!validator.validateEmail(email)) {
      setEmailError("Email invalid");
      return;
    } else setEmailError(null);

    var message = messageInput.current.value;
    if (!validator.validateMessage(message)) {
      setMessageError("Message invalid");
      return;
    } else setMessageError(null);

    console.log("Send to server:", name, email, message);
  }

  return (
    <>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" ref={nameInput} /> {nameError}
        </div>
        <div>
          <label>Email address</label>
          <input type="text" ref={emailInput} /> {emailError}
        </div>
        <div>
          <label>Message</label>
          <textarea type="text" ref={messageInput} /> {messageError}
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
