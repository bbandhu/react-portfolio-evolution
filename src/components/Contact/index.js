import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { Button, TextField, FormHelperText } from '@mui/material';

const Contact = () => {
  // Form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Validate email format
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = {};

    // Check if fields are empty
    Object.keys(form).forEach((key) => {
      if (form[key] === '') {
        errs[key] = 'This field is required';
      }
    });

    // Check email format
    if (form.email !== '' && !validateEmail(form.email)) {
      errs.email = 'Invalid email address';
    }

    setErrors(errs);

    // Form is valid if there are no errors
    if (Object.keys(errs).length === 0) {
      // Submit form
      console.log('Form submitted successfully!');
    }
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact me</h1>
          <p>
          I am currently exploring full-time opportunities in the software engineering and quality assurance domains. With extensive experience and a passion for technology, I am eager to contribute to a dynamic organization. If you have any questions or would like to connect, please feel free to reach out to me via email or LinkedIn.
          </p>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <ul>
                <li className="form-row">
                  <label htmlFor="name">Name</label>
                  <TextField id="name" name="name" type='text' variant="outlined" fullWidth InputProps={{ className: "input" }} value={form.name} onChange={handleChange} />
                  {errors.name && <FormHelperText error>{errors.name}</FormHelperText>}
                </li>
                <li className="form-row">
                  <label htmlFor="email">Email</label>
                  <TextField id="email" name="email" type="email" variant="outlined" fullWidth InputProps={{ className: "input" }} value={form.email} onChange={handleChange} />
                  {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
                </li>
                <li className="form-row">
                  <label htmlFor="subject">Subject</label>
                  <TextField id="subject" name="subject" type='text' variant="outlined" fullWidth InputProps={{ className: "input" }} value={form.subject} onChange={handleChange} />
                  {errors.subject && <FormHelperText error>{errors.subject}</FormHelperText>}
                </li>
                <li className="form-row">
                  <label htmlFor="message">Message</label>
                  <TextField id="message" name="message" type='text' multiline rows={4} variant="outlined" fullWidth InputProps={{ className: "input" }} value={form.message} onChange={handleChange} />
                  {errors.message && <FormHelperText error>{errors.message}</FormHelperText>}
                </li>
              </ul>
              <Button variant="contained" color="primary" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;