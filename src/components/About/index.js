import "./index.scss";
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJava,
    faJsSquare,
    faPython,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import Loader from 'react-loaders'


  const About = () => {
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>
        <p>
          Hi there, I'm Bandhavi Bendi. After earning a Bachelor's degree in
          Mechanical Engineering in India and working in the field for a year, I
          found my true calling in software engineering. The lure of programming
          led me to learn JAVA, and eventually to build application testing
          frameworks.
        </p>
        <p>
          My tech career began as a Quality Engineer, where I gradually dove
          into script writing and the practical application of JAVA concepts to
          automate tasks, accelerating my career growth. Currently, I serve as a
          Senior Software Development Engineer in Test (Sr. SDET) at Coupa
          Software, San Mateo, CA.
        </p>
        <p align="LEFT">
          Before my present role, I worked for eight years at Oportun as a Staff
          SDET. The desire to further enhance my skills inspired me to dive into
          full-stack development and end-to-end application creation. This
          pursuit led me to a rigorous software development boot camp at UC
          Berkeley Extension. This comprehensive program refined my skills and
          enabled me to build robust full-stack applications. It helped me
          reinforce my knowledge of JavaScript and SQL, learn MongoDB, and
          master modern frameworks like React and Node.js.
        </p>
        <p>
          As an ardent learner, I'm always seeking out fresh opportunities to
          broaden my skills and knowledge. I'm a collaborative team player who
          thrives on working with others to attain a shared objective.
          Currently, I'm on the lookout for a full-time software engineering
          role.
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
