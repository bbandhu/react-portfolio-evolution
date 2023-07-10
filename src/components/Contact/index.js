import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'


const Contact = () => 
{
  return (
    <>
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          Hi, <br/> <br /> I' m B {/* <img src={LogoTitle} alt="developer" /> */}
          Bandhavi
          <br />
          <br />
            web developer
        </h1>
        <h2>Full stack developer / SDET </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
}

export default Contact;