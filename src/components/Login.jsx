import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SignUp.module.css';

import { validate } from './validate';
import { notify } from './toast';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState({});

  useEffect(() => {
    setErrors(validate(data, 'login'));
  }, [data, focused]);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleFocus = (event) => {
    setFocused({ ...data, [event.target.name]: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify('Login completed.', 'success');
    } else {
      notify('Invalid data!', 'error');
      setFocused({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Login</h2>

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

        <div className={styles.formButtons}>
          <Link to='/signup'>Sign up</Link>
          <button type='submit'>Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
