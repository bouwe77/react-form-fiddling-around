const validateName = name => name.length >= 1 && name.length <= 300;

const validateEmail = email => {
  var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.length >= 3 && email.length <= 50 && regex.test(email);
};

const validateMessage = message => message.length >= 1 && message.length <= 1000;

const validateUsername = username =>
  username.length >= 3 && username.length <= 50 && /[A-Za-z0-9]/.test(username);

const validatePassword = password => password.length >= 3 && password.length <= 300;

const validatePasswordsMatch = (password1, password2) => password1 === password2;

export default {
  validateName,
  validateEmail,
  validateMessage,
  validateUsername,
  validatePassword,
  validatePasswordsMatch
};
