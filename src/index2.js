// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// import validator from "./validation";

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [password2, setPassword2] = useState("");
//   const [usernameValidation, setUsernameValidation] = useState({});
//   const [passwordValidation, setPasswordValidation] = useState({});
//   const [password2Validation, setPassword2Validation] = useState({});

//   console.log(password2Validation);

//   const everythingValid =
//     usernameValidation.isValid && passwordValidation.isValid && password2Validation.isValid;

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(username, password);
//   }

//   function handleUsernameChange(event) {
//     setUsername(event.target.value);
//     const isValid = validator.validateUsername(event.target.value);
//     setUsernameValidation({ isValid, errorMessage: null });
//   }

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//     const isValid = validator.validatePassword(event.target.value);
//     setPasswordValidation({ isValid, errorMessage: null });
//     validatePasswordsAreEqual(event.target.value, password2);
//   }

//   function handlePassword2Change(event) {
//     setPassword2(event.target.value);
//     validatePasswordsAreEqual(password, event.target.value);
//   }

//   function validatePasswordsAreEqual(password1, password2) {
//     const isValid = validator.validatePasswordsMatch(password1, password2);
//     setPassword2Validation({ isValid, errorMessage: null });
//   }

//   function handleUsernameBlur(event) {
//     if (!usernameValidation.isValid)
//       setUsernameValidation({ ...usernameValidation, errorMessage: "Username nie goe" });
//   }

//   function handlePasswordBlur(event) {
//     if (!passwordValidation.isValid)
//       setPasswordValidation({ ...passwordValidation, errorMessage: "Password nie goe" });
//   }

//   function handlePassword2Blur(event) {
//     if (!password2Validation.isValid)
//       setPassword2Validation({ ...password2Validation, errorMessage: "Password2 nie goe" });
//   }

//   return (
//     <>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={handleUsernameChange}
//             onBlur={handleUsernameBlur}
//           />
//           {usernameValidation.errorMessage}
//         </label>
//         <br />
//         <label>
//           Password
//           <input
//             type="text"
//             name="password"
//             value={password}
//             onChange={handlePasswordChange}
//             onBlur={handlePasswordBlur}
//           />
//           {passwordValidation.errorMessage}
//         </label>
//         <br />
//         <label>
//           Confirm password
//           <input
//             type="text"
//             name="password2"
//             value={password2}
//             onChange={handlePassword2Change}
//             onBlur={handlePassword2Blur}
//           />
//           {password2Validation.errorMessage}
//         </label>
//         <div>
//           <button type="submit" disabled={!everythingValid}>
//             Submit
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
