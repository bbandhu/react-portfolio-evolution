import './index.scss';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import image1 from '../../assets/images/weatherDashboard.png';
import image2 from '../../assets/images/sc2.png';
import image3 from '../../assets/images/wanderlist.png';
import image4 from '../../assets/images/ODM.png';
import image5 from '../../assets/images/ORM.png';
import image6 from '../../assets/images/Snapshot.png';

// list of projects
const portfolioData = [
  {
    cover: image1,
    title: "Weather Dashboard",
    description: "Js, Jquery, Bootstrap, OpenWeather API",
    url: "https://github.com/bbandhu/Weather-Dashboard"
  },

  {
    cover: image3,
    title: "Wanderlist",
    description: "Bootstrap, jQuery, Node, Express, MySQL, Sequelize, Handlebars",
    url: "https://github.com/JDempe/WanderList"
  },

  {
    cover: image2,
    title: "React Portfolio",
    description: "React, Material UI",
    url: "https://github.com/bbandhu/react-portfolio-evolution"
  },

  {
    cover: image4,
    title: "Social Network API",
    description: "Nodejs, Express, MongoDB, Mongoose, Moment.js, Nodemon, Insomnia",
    url: "https://github.com/bbandhu/Social-Network-API"
  },

    {
      cover: image5,
      title: "ORM Ecommerse BackEnd",
      description: "Nodejs, Express, Sequelize, MySql, Nodemon, Insomnia",
      url: "https://github.com/bbandhu/ORM-E-commerce"
    },

    {
      cover: image6,
      title: "SnapShot",
      description: "React, Material UI,Apollo GraphQL, Stripe, MongoDB",
      url: "https://github.com/JDempe/Snapshot"
    },
];

const Portfolio = () => {
    return (
      <div className="portfolio-page">
        <Typography variant="h4" component="h1" className="page-title">My Recent Work</Typography>
        <div className="images-container">
          {portfolioData.map((project, index) => (
            <Card key={index} className="image-box">
              <CardMedia component="img" height="140" image={project.cover} alt={`${project.title} project`} className="portfolio-image" />
              <CardContent className="content">
                <Typography variant="h5" component="div" className="title">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" className="description">{project.description}</Typography>
                <Button variant="contained" href={project.url} target="_blank" rel="noreferrer" className="btn">Project Link</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  
  export default Portfolio;