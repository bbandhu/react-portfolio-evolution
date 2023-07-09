import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-b.png";
import "./index.scss";

const Home = () => {
  return (
    <div className="container home-page">
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
  );
};

export default Home;
