import React, { createRef, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import validator from "./validation";
import { VALID, INVALID, UNDETERMINED } from "./validationStatuses";

function App() {
  function fakeSendingToServer(name, email, message) {
    console.log("Send to server:", [name, email, message]);
  }

  return <ContactForm sendToServer={fakeSendingToServer} />;
}

function ContactForm({ sendToServer }) {
  // Refs for the input fields.
  let nameInput = createRef();
  let emailInput = createRef();
  let messageInput = createRef();

  // State variables for the validity of the inputted data.
  const [nameValid, setNameValid] = useState(UNDETERMINED);
  const [emailValid, setEmailValid] = useState(UNDETERMINED);
  const [messageValid, setMessageValid] = useState(UNDETERMINED);

  function handleSubmit(event) {
    // Prevent posting the form to a server.
    event.preventDefault();

    // Validate the name.
    var name = nameInput.current.value;
    const newNameValid = validator.validateName(name) ? VALID : INVALID;
    setNameValid(newNameValid);

    // Validate the email address.
    var email = emailInput.current.value;
    const newEmailValid = validator.validateEmail(email) ? VALID : INVALID;
    setEmailValid(newEmailValid);

    // Validate the message.
    var message = messageInput.current.value;
    var newMessageValid = validator.validateMessage(message) ? VALID : INVALID;
    setMessageValid(newMessageValid);

    // Only send the data to the server when everyting is valid.
    if (newNameValid === VALID && newEmailValid === VALID && newMessageValid === VALID) {
      sendToServer(name, email, message);
      nameInput.current.value = "";
      emailInput.current.value = "";
      messageInput.current.value = "";
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" ref={nameInput} />
          {nameValid === INVALID ? "Please enter your name" : null}
        </div>
        <div>
          <label>Email address</label>
          <input type="text" ref={emailInput} />
          {emailValid === INVALID ? "Please enter a valid email address" : null}
        </div>
        <div>
          <label>Message</label>
          <textarea type="text" ref={messageInput} />
          {messageValid === INVALID ? "Please enter a message" : null}
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
