const validateUsername = username =>
  username.length >= 3 && username.length <= 50 && /[A-Za-z0-9]/.test(username)
    ? null
    : "Username can only contain between 3 and 50 letters and numbers";

const validatePassword = password =>
  password.length >= 8 && password.length <= 300
    ? null
    : "Password must be between 8 and 300 characters";

const validatePasswordsMatch = (password1, password2) =>
  password1 === password2 ? null : "Passwords must match";

export default { validateUsername, validatePassword, validatePasswordsMatch };
