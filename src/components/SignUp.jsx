import React, { useState, useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SignUp.module.css';

import { validate } from './validate';
import { notify } from './toast';

const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});

  useEffect(() => {
    setErrors(validate(data, 'signup'));
  }, [data, focused]);

  const handleChange = (event) => {
    if (event.target.name === 'isAccepted') {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const handleFocus = (event) => {
    if (event.target.name === 'isAccepted') {
      setFocused({ ...data, [event.target.name]: false });
    } else {
      setFocused({ ...data, [event.target.name]: true });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify('Sign up completed.', 'success');
    } else {
      notify('Invalid data!', 'error');
      setFocused({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>SignUp</h2>
        <div className={styles.formField}>
          <label htmlFor='userName'>Name</label>
          <input
            type='text'
            name='name'
            id='userName'
            value={data.name}
            onChange={handleChange}
            onFocus={handleFocus}
            className={
              errors.name && focused.name
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.name && focused.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formField}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={data.email}
            onChange={handleChange}
            onFocus={handleFocus}
            className={
              errors.email && focused.email
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.email && focused.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label htmlFor='pass'>Password</label>
          <input
            type='password'
            name='password'
            id='pass'
            value={data.password}
            onChange={handleChange}
            onFocus={handleFocus}
            className={
              errors.password && focused.password
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.password && focused.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label htmlFor='confirmPass'>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            id='confirmPass'
            value={data.confirmPassword}
            onChange={handleChange}
            onFocus={handleFocus}
            className={
              errors.confirmPassword && focused.confirmPassword
                ? styles.uncompleted
                : styles.formInput
            }
          />
          {errors.confirmPassword && focused.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>I accept terms of privacy policy</label>
            <input
              type='checkbox'
              name='isAccepted'
              value={data.isAccepted}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
          {errors.isAccepted && focused.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <a href='#'>Login</a>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
