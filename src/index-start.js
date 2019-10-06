import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  function fakeSendingToServer(name, email, message) {
    console.log("Send to server:", [name, email, message]);
  }

  return <ContactForm sendToServer={fakeSendingToServer} />;
}

function ContactForm({ sendToServer }) {
  return (
    <>
      <h1>Contact us</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email address</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Message</label>
          <textarea type="text" name="message" />
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
