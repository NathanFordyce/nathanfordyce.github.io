import React from 'react';
import Image from './Image';

import './homepage.css';
import { SocialIcon } from 'react-social-icons';
import { FaPhoneAlt } from "react-icons/fa";

const Jumbotron: React.FC = () => {
  return (
      <div className="cover-page py-5">

        <div className="row">
          <img src="nathan.jpg" id="imgCover" className="mx-auto d-block" alt="..." />
        </div>
       
        <div className="row mt-2 text-light bg-dark">
          <div className="row m-2">
            <h1 className="display-5" id="portfolio-lead">Hi, I'm <span id='nameLead'> Nathan </span> Fordyce.</h1>
          </div>  
          <div className='row'>
            <p id="portfolio-body"> I strive to develop <span id='jumboBold'>effective</span>, <span id='jumboBold'>coherent</span>, and most importantly <span id='jumboBold'>fantastic</span> user experiences.</p>
            <p>I am a highly motivated developer and thrive when faced with a challange, having over 5 years of experience developing C++/C# solutions.</p>
          </div>
        </div>

        <div className="row mt-2 bg-dark">
          <div className="row m-2 d-flex align-items-center">
            <div className="col-12">
              <img src="location.png" style={{ width: '50px', height: '50px' }} alt="..." />
              <span style={{ paddingLeft: '10px', fontSize: '20px', whiteSpace: 'nowrap', color: 'white', fontFamily: 'monospace' }}>Dunfermline, Scotland</span>
            </div>
          </div>

          <div className="row m-2 d-flex align-items-center">
            <div className="col-12">
              <img src="education.png" style={{ width: '50px', height: '50px' }} alt="..." />
              <span style={{ paddingLeft: '10px', fontSize: '20px', color: 'white', fontFamily: 'monospace' }}>BSc Computer Games Technology (2:1)</span>
            </div>
          </div>

          <div className="row mt-2 m-2">
            <SocialIcon bgColor="#3d3e40" className="img-fluid" style={{ width: '100px', height: '100px', marginRight: '10px' }} url="https://www.linkedin.com/in/nathan-fordyce/" />
            <SocialIcon bgColor="#3d3e40" className="img-fluid" style={{ width: '100px', height: '100px', marginRight: '10px' }} url="mailto:nathanfordyce06@gmail.com" />
            <SocialIcon bgColor="#3d3e40" className="img-fluid" style={{ width: '100px', height: '100px', marginRight: '10px' }} url="https://github.com/NathanFordyce" />
          </div>


        </div>
    </div>
  );
};

export default Jumbotron;