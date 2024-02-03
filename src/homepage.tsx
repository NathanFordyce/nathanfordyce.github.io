import React from 'react';
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './homepage.css';

import linkedin from './images/linkedin.png';
import github from './images/github.png';

const Portfolio: React.FC = () => {
    return (
      <html>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
<<<<<<< Updated upstream
          
=======
        <body>

        <div className="outer-container">
          <div className="inner-container">

            <div className="left-of-container">
              <p className="openingTitle">
                I'm Nathan Fordyce
              </p>
              <p className="openingBody">
                I strive to develop effective, coherent, user-centered experiences.
              </p>

                <a href="https://www.linkedin.com/in/nathan-fordyce/"><img src={linkedin} className="socialLinks" alt="LinkedIn"/></a>
                <a href="https://github.com/NathanFordyce"><img src={github} className="socialLinks" alt="GitHub"/></a>
            </div>

            <div className="right-of-container">
              <p>
                <ul className="openingLinks">
                  <li><a href="#">Lorem ipsum dolo</a></li>
                  <li><a href="#">Tempor incididunt ut</a></li>
                  <li><a href="#">Illum dolore eu</a></li>
                </ul>
              </p>
            </div>

          </div>
        </div>

        </body>
>>>>>>> Stashed changes

      </html>      
    );
}

export default Portfolio;
