// Importing required dependencies and components
import './App.scss'; // Importing the CSS styles for the App component
import { Routes, Route } from 'react-router-dom'; // Importing routing components from react-router-dom
import Layout from './components/Layout'; // Importing the Layout component
import Home from './components/Home'; // Importing the Home component
import About from './components/About'; // Importing the About component
import Contact from './components/Contact'; // Importing the Contact component
import Portfolio from './components/Portfolio'; // Importing the Portfolio component
import Resume from './components/Resume'; // Importing the resume component

// Defining the App component
function App() {
  return (
    // Routes component from react-router-dom that holds all possible routes for the app
    <Routes>
      {/* // A Route for the base path "/" with the Layout component as its child */}
      <Route path="/" element={<Layout />}>
        {/* // Nested routes for different paths under "/" */}
        {/* // The Home component will be shown when path is "/" */}
        <Route index element={<Home />} />
        {/* // The About component will be shown when path is "/about" */}
        <Route path="about" element={<About />} />
        {/* // The Contact component will be shown when path is "/contact" */}
        <Route path="contact" element={<Contact />} />
        {/* // The Portfolio component will be shown when path is "/portfolio" */}
        <Route path="portfolio" element={<Portfolio />} />
        {/* // The resume component will be shown when path is "/resume" */}
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

// Exporting the App component for use in other parts of the application
export default App;