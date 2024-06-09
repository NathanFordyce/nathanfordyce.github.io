import React from 'react';
import Template from './ProjectTemplate';
import { SocialIcon } from 'react-social-icons';
import { TbBrandCSharp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";


const aboutContent = (
  <div>
    <p>Fast Feud is a twin-stick shooter game where you play as a pizza delivery guy on a bicycle. </p>
    <p>Your goal is to fend off hordes of enemy drones which have been sent by competing pizza chains while, delivering pizzas as quickly as possible.</p>
  </div>
);

const contributionContent = (
  <div>
    <p> I was responsible for the creation of the enemies - with this I created a spawning system which increased the amount of enemies that can be spawned in the game at once which gradually increases overtime to make game progressively more challenging.
    </p>
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

const GraphicsProgramming: React.FC = () => {
  const languages = [TbBrandCSharp, FaUnity];

  return (
    <Template
      titleContent="Graphics Programming"
      aboutContent={aboutContent}
      contributionContent={contributionContent}
      galleryContent={galleryContent}
      linksContent={linksContent}
      languages={languages} // Pass the languages array to the Template component
    />
  );
};

export default GraphicsProgramming;
