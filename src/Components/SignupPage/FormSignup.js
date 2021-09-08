import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Link } from 'react-router-dom';
import { useStateValue } from "../../ContextApi/StateProvider";
import {actionTypes} from "../../ContextApi/reducer";

const FormSignup = ({ submitForm }) => {
  const [{user, email}, dispatch] = useStateValue();
  const addUser = () => {
    console.log("context")
    localStorage.setItem("userName", values.username);
    localStorage.setItem("email", values.email);

    //add User
    dispatch({
      type: actionTypes.SET_USER,
      user: values.username
    });
    dispatch({
      type: actionTypes.SET_EMAIL,
      email: values.email
    });
  };
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
      <a href="home"><h1>Safe Courier</h1></a>
        <h2>
        We help users deliver parcels to different  destinations & provides courier quotes based on weight categories
        </h2>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text' 
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}

          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          /> 
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          <Link to = "/OrderPage" onClick={addUser}>Sign up</Link>
        </button>
        <span className='form-input-login'>
          Already have an account? Login <Link to='./Login'>here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
