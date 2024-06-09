import React from 'react';
import Jumbotron from './Jumbotron';
import Projects from './Projects';

const Home: React.FC = () => {
  return (
    <div className="row min-vh-100 p-5">
      <div className="col-12 col-md-4">
        <Jumbotron />
      </div>
      <div className="col-12 col-md-8">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
