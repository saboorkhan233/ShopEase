import React from 'react';
import { Formik, Form } from 'formik';
import {Textfield} from '../Textfield';
import * as Yup from 'yup';

const SignIn = () => {
  const validate = Yup.object({
    email: Yup.string()
    .email('Email is invalid!!')
    .required('Email is Required'),
    password: Yup.string()
    .min(6, 'Password must be atleast 6 characters!!')
    .required('Password is Required')
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
     validationSchema={validate}
    >
      {formik => (
        <div>
            <br />
            <br />
            <br />
          <h1 className="my-4 font-weight-bold .display-4">Sign In</h1>
          <Form>
         
            <Textfield label="Email" name="email" type="email" />
            <Textfield label="Password" name="password" type="password" />
            
            <button className='btn btn-primary mt-3 ml-3' type='reset'>Sign In</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default SignIn;
