import React from 'react';
import {Helmet} from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.css';
import './Homepage.css';

import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
import CV from './CV';


const Portfolio: React.FC = () => {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    const dataParams = searchParams.get('redirect');
    
    const htmlContent = {
      'home': <Jumbotron/>,
      'about': <CV/>,
      'projects': <Projects/>,
      'default': <Jumbotron/>,
    };

    let bodyContent;
    switch (dataParams) {
      case 'home':
        bodyContent = htmlContent.home;
        break;
      case 'about':
        bodyContent = htmlContent.about;
        break;
      case 'projects':
          bodyContent = htmlContent.projects;
          break;
      default:
        bodyContent = htmlContent.default;
    }
  
    return (
      <html>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>

        <body>
          <Navbar/>
          <div className="d-flex min-vh-100 align-items-center justify-content-center py-5">
            {bodyContent}
          </div>
        </body>

      </html>      
    );
}

export default Portfolio;
