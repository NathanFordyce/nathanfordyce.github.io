import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Homepage.css';

import PhotoCarousel from './Carousel';



interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string; 
  image_1: string;
  image_2: string;
  image_3: string;
}

const projects: Project[] = [
  {
    title: 'Honours Project - Reinforcement Learning',
    description: "For this project, I created an artefact to determine the feasibility of using reinforcement learning in the testing stages of a game's development. I also emulated keyboard, mouse and controller inputs to ensure agents performed more humanlike.",
    tags: ['C++', 'Unity'],
    github: 'https://github.com/your-username/project-1',
    image_1: "honours1.png",
    image_2: "honours2.png",
    image_3: "honours3.png",
  },
  {
    title: 'Fast Feud',
    description: 'Fast Feud was produced as part of a team for my 3rd year group assignment. I was solely responsible for developing enemy AI and player shooting mechanics within this project.',
    tags: ['C++', 'Unreal Engine'],
    github: 'https://github.com/your-username/project-1',
    image_1: "fastfeud1.png",
    image_2: "fastfeud1.png",
    image_3: "fastfeud1.png",
  },
  {
    title: 'Scout the Robot',
    description: 'This is a game that I created with SFML in my first year of university for an assignment and decided to recreate in unity when learning the engine for the first time.',
    tags: ['C++', 'Unity'],
    github: 'https://github.com/your-username/project-1',
    image_1: "scout1.png",
    image_2: "scout2.png",
    image_3: "scout3.png",
  },
  {
    title: 'The Toys Have Infected People',
    description: 'This game was created for Jame Gam #19 and I collaborated with a friend. My main contributions were towards the enemy movement and level design.',
    tags: ['C++', 'Unreal Engine'],
    github: 'https://github.com/your-username/project-1',
    image_1: "tomstoys1.png",
    image_2: "tomstoys1.png",
    image_3: "tomstoys1.png",
  },
];

const Projects: React.FC = () => {
    return (
      <div className="container py-5" id="projectContainer">
        <div className="row">
          {projects.map((project) => (
            <div className="col-sm-6 p-1 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" id="cardLead">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className='m-3'>
                  <PhotoCarousel filename_1={project.image_1} filename_2={project.image_2} filename_3={project.image_3}/>
                </div>

                <div className="card-footer m-2">
                  {project.tags.map((tag) => (
                    <span className='tag m-1 p-2'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
    );
}

export default Projects;
