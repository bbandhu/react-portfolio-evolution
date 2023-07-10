import "./index.scss";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
import profilePic from "../../assets/images/profile-pic.jpg";

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <img src={profilePic} alt="Bandhavi Bendi" className="profile-pic" />

          <h1>About Me</h1>
          <p>
            Hi there, I'm Bandhavi Bendi, a highly experienced Quality Engineer
            with over 9 years of expertise in software development and testing.
            My passion for programming and automation has driven my career
            growth, and I have successfully built application testing frameworks
            using JAVA.
          </p>
          <p>
            After completing my Bachelor's degree in Mechanical Engineering in
            India, I transitioned into the software engineering field and began
            my journey as a Quality Engineer. Through my work, I gained
            extensive experience in script writing and applying JAVA concepts to
            automate tasks, which allowed me to excel in my role. Currently, I
            hold the position of Senior Software Development Engineer in Test
            (Sr. SDET) at Coupa Software in San Mateo, CA.
          </p>
          <p align="LEFT">
            Seeking continuous improvement, I proactively pursued full-stack
            development and end-to-end application creation. To accomplish this,
            I enrolled in a rigorous software development boot camp at UC
            Berkeley Extension. This comprehensive program refined my skills and
            equipped me with expertise in JavaScript, SQL, MongoDB, and modern
            frameworks like React and Node.js, enabling me to build robust and
            scalable full-stack applications.
          </p>
          <p>
            As an enthusiastic learner, I am always eager to explore new
            opportunities to expand my skills and knowledge. I thrive in
            collaborative team environments, working closely with others to
            achieve shared objectives. Currently, I am actively seeking a
            challenging and rewarding full-time software engineering role where
            I can leverage my extensive experience, technical proficiency, and
            passion for quality to contribute to the success of a dynamic
            organization.
          </p>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon className="icon" icon={faHtml5} color="#F06529" />
          <FontAwesomeIcon className="icon" icon={faCss3} color="#28A4D9" />
          <FontAwesomeIcon className="icon" icon={faReact} color="#5ED4F4" />
          <FontAwesomeIcon className="icon" icon={faJsSquare} color="#EFD81D" />
          <FontAwesomeIcon className="icon" icon={faGitAlt} color="#EC4D28" />
          <FontAwesomeIcon className="icon" icon={faJava} color="#DD1B16" />
          <FontAwesomeIcon className="icon" icon={faPython} color="#F0F8FF" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
