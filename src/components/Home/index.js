import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-b.png";
import "./index.scss";

const Home = () => {
  return (
    <>
    <div className="container home-page">
    <div className="background-image">


      <div className="text-zone">
        <h1>
          Hi, <br/> <br /> I' m B {/* <img src={LogoTitle} alt="developer" /> */}
          Bandhavi
          <br />
          <br />
            A software developer with a passion for learning and creating.
        </h1>
        <h2>Full stack developer / SDET </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
