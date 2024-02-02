import React from 'react';
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './homepage.css';

const Portfolio: React.FC = () => {
    return (
      <html>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
          

        <footer className="footer bg-dark text-center fixed-bottom">
          <div className="container">
            <span className="text-light">Developed By Ewan Stewart (2024)</span>
          </div>
        </footer>
      </html>      
    );
}

export default Portfolio;
