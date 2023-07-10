import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import { Button, TextField } from '@material-ui/core';

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact me</h1>
          <p>
            I am currently looking for a full-time software engineering role. If you have any questions or would like to connect, please feel free to reach out to me via email or LinkedIn.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="form-row">
                  <label htmlFor="name">Name</label>
                  <TextField id="name" type='text'variant="outlined" fullWidth InputProps={{ className: "input" }} />
                </li>
                <li className="form-row">
                  <label htmlFor="email">Email</label>
                  <TextField id="email" type="email" variant="outlined" fullWidth InputProps={{ className: "input" }} />
                </li>
                <li className="form-row">
                  <label htmlFor="subject">Subject</label>
                  <TextField id="subject" type='text' variant="outlined" fullWidth InputProps={{ className: "input" }} />
                </li>
                <li className="form-row">
                  <label htmlFor="message">Message</label>
                  <TextField id="message" type='text' multiline rows={4} variant="outlined" fullWidth InputProps={{ className: "input" }} />
                </li>
              </ul>
              <Button variant="contained" color="primary" type="submit">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;