import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './homepage.css';

import PhotoCarousel from './Carousel';
import { title } from 'process';

import { IconType } from 'react-icons';
import { TbBrandCSharp} from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";
import { FaUnity } from "react-icons/fa6";
import { SiUnrealengine } from "react-icons/si";


interface Project {
  title: string;
  description: string;
  languages?: IconType[]; // Array of React icons representing programming languages
  image_1: string;
  image_2: string;
  image_3: string;
}

const projects: Project[] = [
  {
    title: 'ML Agents',
    description: "As part of my Honours project, I created an artefact to determine the feasibility of using reinforcement learning in the testing stages of a game's development. This centered around creating a series of ML agents capable of emulating a variety of hardware inputs to navigate a game.",
    languages: [TbBrandCSharp, FaUnity],
    image_1: "honours1.png",
    image_2: "honours2.png",
    image_3: "honours3.png",
  },
  {
    title: 'Graphics Programming',
    description: 'This is a game that I created with SFML in my first year of university for an assignment and decided to recreate in unity when learning the engine for the first time.',
    languages: [CgCPlusPlus],
    image_1: "graphics1.png",
    image_2: "graphics2.png",
    image_3: "graphics3.png",
  },
  {
    title: 'Fast Feud',
    description: 'Fast Feud was produced as part of a team for my 3rd year group assignment. I was solely responsible for developing enemy AI and player shooting mechanics within this project.',
    languages: [CgCPlusPlus, SiUnrealengine],
    image_1: "fastfeud1.png",
    image_2: "fastfeud2.png",
    image_3: "fastfeud3.png",
  },
  {
    title: 'The Toys Have Infected People',
    description: 'As part of Game Jam #19, I collaborated with a friend to develop a fully fledged game in 48 hours. ',
    languages: [CgCPlusPlus, SiUnrealengine],
    image_1: "tomstoys1.png",
    image_2: "tomstoys2.png",
    image_3: "tomstoys3.png",
  },
  {
    title: 'Casino Crasher',
    description: 'As part of Game Maker Toolkit Game Jam 2022, I collaborated with a small team over 48 hours to develop a game with the theme of "Roll of the Dice". ',
    languages: [CgCPlusPlus, SiUnrealengine],
    image_1: "casino1.png",
    image_2: "casino2.png",
    image_3: "casino2.png",
  }, 
  {
    title: 'Maths/AR?',
    description: 'Donec facilisis rhoncus metus, eu condimentum nibh. Nulla faucibus libero eu velit laoreet fringilla. Vestibulum interdum ullamcorper felis.',
    languages: [CgCPlusPlus, SiUnrealengine],
    image_1: "casino1.png",
    image_2: "casino1.png",
    image_3: "casino1.png",
  },
];

function handleClick (title: string) {
  console.log(title);
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set('redirect', title);
  searchParams.set('project', "true");
  window.location.search = searchParams.toString();
};


const Projects: React.FC = () => {

  
    return (
        <div className="container py-5" id="projectContainer">
            <div className="row">
              {projects.map((project) => (
                <div className="col-sm-6 p-1 d-flex align-items-stretch" style={{ cursor: "pointer" }} key={project.title}>
                  <div onClick={() => handleClick(project.title)} className="card bg-dark text-light" style={{ cursor: "pointer" }}>
                    <div className="card-body">
                      <h5 className="card-title" id="cardLead">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                    </div>
                    <div className='m-3'>
                      <PhotoCarousel filename_1={project.image_1} filename_2={project.image_2} filename_3={project.image_3} />
                    </div>
                    <div className="card-footer m-2">
                      {project.languages?.map((Icon, index) => (
                        <Icon key={index} size="5em" className="mr-3 p-2 icon-style" />
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
