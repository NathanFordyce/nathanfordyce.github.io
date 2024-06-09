import React from 'react';
import {Helmet} from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.css';
import './homepage.css';

import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Projects from './Projects';
import FastFeud from './Fast Feud';
import CasinoCrasher from './Casino Crasher';
import GraphicsProgramming from './Graphics Programming';
import TomsToys from './Toms Toys';
import MLAgents from './ML Agents';
import CV from './CV';
import Home from './homeCombined';



const Portfolio: React.FC = () => {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    const dataParams = searchParams.get('redirect');
   
    const htmlContent = {
      'home': <Home/>,
      'about': <CV/>,
      'projects': <Projects/>,
      'Fast Feud': <FastFeud/>,
      'Casino Crasher': <CasinoCrasher/>,
      'Graphics Programming': <GraphicsProgramming/>,
      'The Toys Have Infected People': <TomsToys/>,
      'ML Agents': <MLAgents/>,
      'default': <Home/>,
    };

    let bodyContent;
    switch (dataParams) {
      case 'home':
        bodyContent = htmlContent.home;
        break;
      case 'Fast Feud':
        bodyContent = htmlContent['Fast Feud'];
        break;
      case 'Casino Crasher':
        bodyContent = htmlContent['Casino Crasher'];
        break;
      case 'Graphics Programming':
        bodyContent = htmlContent['Graphics Programming'];
        break;
      case 'ML Agents':
        bodyContent = htmlContent['ML Agents'];
        break;
      case 'The Toys Have Infected People':
        bodyContent = htmlContent['The Toys Have Infected People'];
        break;
      case 'cv':
        bodyContent = htmlContent.about;      
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
          {bodyContent}

        </body>

      </html>      
    );
}

export default Portfolio;
