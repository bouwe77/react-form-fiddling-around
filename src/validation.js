const validateUsername = username =>
  username.length >= 3 && username.length <= 50 && /[A-Za-z0-9]/.test(username);

const validatePassword = password => password.length >= 3 && password.length <= 300;

const validatePasswordsMatch = (password1, password2) => password1 === password2;

export default { validateUsername, validatePassword, validatePasswordsMatch };
