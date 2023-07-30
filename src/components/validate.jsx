export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = 'Username required!';
  } else {
    delete errors.name;
  }

  if (!data.email) {
    errors.email = 'Email required!';
  } else if (!/\S+@\S+/.test(data.email)) {
    errors.email = 'Invalid email address';
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = 'Password required!';
  } else if (data.password.length < 6) {
    errors.password = 'Password must be atleast 6 characters.';
  } else {
    delete errors.email;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = 'Confirm your password!';
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = 'Password not match!';
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = 'Please agree to our terms';
  }

  return errors;
};
