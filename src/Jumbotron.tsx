import React from 'react';
import Image from './Image';

import './Homepage.css';

const Jumbotron: React.FC = () => {
  return (
    <div className="jumbotron jumbotron-fluid text-center py-5">
      <div className="container">
        <h1 className="display-1" id="portfolio-lead">Hi, I'm <span id='nameLead'> Nathan </span> Fordyce.</h1>
        <p className="lead" id="portfolio-body"> I strive to develop <span id='jumboBold'>effective</span>, <span id='jumboBold'>coherent</span>, and most importantly <span id='jumboBold'>fantastic</span> user experiences.</p>
        <div className='row'>
          <div className='col-sm-6'>
            <Image filename="github.png" url="https://github.com/NathanFordyce"/>
          </div>
          <div className='col-sm-6'>
            <Image filename="linkedin.png" url="https://www.linkedin.com/in/nathan-fordyce/"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;