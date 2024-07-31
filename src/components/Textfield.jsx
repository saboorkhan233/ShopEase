import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const Textfield = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    console.log(field, meta);
  return (
    <div className='mb-2'>
        <label htmlFor={field.name} style={{ fontSize: '0.85em' }}>{label}</label>
        <input 
        className={`form-control shadow-none ${meta.touched && meta.error && `is-invalid`}`}
        {...field} {...props}
        autoComplete='off' />

        <ErrorMessage name = {field.name} />
    </div>
  )
}

export default Textfield