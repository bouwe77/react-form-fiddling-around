// ====================================================
// Dit is de startsituatie om mee te beginnen
// ====================================================

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
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
