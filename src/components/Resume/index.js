import React from 'react';
import './index.scss';
import Pdf from '../../assets/resume/BandhaviBResume.pdf';

const Resume = () => {
    const skills = ['Java','JavaScript', 'React.js', 'Node.js', 'Python', 'WebdriverIO', 'Cypress.IO', 'Graphql', 'Protractor', 'REST API', 'AWS', 'Heroku','HTML', 'CSS'];

    return (
        <div className="container resume-page">
                  <div className="text-zone">

            <h2>Resume</h2>

            <p>You can download my resume <a href={Pdf} download>here</a>.</p>
            
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            </div>
        </div>
    )
};

export default Resume;