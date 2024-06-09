import React from 'react';
import Template from './ProjectTemplate';
import { SocialIcon } from 'react-social-icons';
import { TbBrandCSharp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";


const aboutContent = (
  <div>
    <p> I developed this game as part of a group project during my 3<sup>rd</sup> year of University. </p>
    <p> It was an interesting insight into working as part of a wider team of personnel, including designers, artists and programmers. It also exposed me to working for an industry client, Near Light, where I learned to navigate customer requirements and deliver a polished final solution. </p>
    <p> Fast Feud is a twin-stick shooter game where you play as a pizza delivery driver on a bicycle for a newly opened fast food chain - Checkers Pizza.</p>
    <p>The goal is to deliver pizzas whilst fending off waves of enemies thrown at you by competing pizza chains!</p>
  </div>
);

const contributionContent = (
  <div>
    <p> I was solely responsible for the design and development of the enemy mechanic. </p>
    <p> With this I created an enemy intelligence and spawning system from concept which effectively tracked the player and gradually controlled the difficulty of the level.</p>
    <p> This mechanic was core to the overall design of the game, providing the player an in-game challenge and also providing an end condition.</p>
  </div>
);

const galleryContent = (
    <iframe 
        src="https://www.youtube.com/embed/BRTH9ZzQg4A?si=K-QuFHSsdShgzb2W" 
        width="100%" 
        height="100%" 
        title="Example Video" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
    </iframe>
);

const linksContent = (
  <div>
    <SocialIcon bgColor="#3d3e40" className="img-fluid" style={{ width: '100px', height: '100px'}} url="https://soaringturtle.itch.io/fast-feud" />
  </div>
);

const FastFeud: React.FC = () => {
  const languages = [TbBrandCSharp, FaUnity];

  return (
    <Template
      titleContent="Fast Feud"
      aboutContent={aboutContent}
      contributionContent={contributionContent}
      galleryContent={galleryContent}
      linksContent={linksContent}
      languages={languages} // Pass the languages array to the Template component
    />
  );
};

export default FastFeud;
