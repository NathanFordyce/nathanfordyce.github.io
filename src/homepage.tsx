import React from 'react';
import {Helmet} from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.css';
import './Homepage.css';

import Navbar from './Navbar';
import Jumbotron from './Jumbotron';

const Portfolio: React.FC = () => {
    return (
      <html>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>

        <Navbar/>

        <body>
          <div className="d-flex min-vh-100 align-items-center justify-content-center">
            <Jumbotron/>
          </div>
        </body>

      </html>      
    );
}

export default Portfolio;
