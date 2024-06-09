import React from 'react';
import {Button} from 'react-native';
import Template from './ProjectTemplate';
import { SocialIcon } from 'react-social-icons';
import { TbBrandCSharp } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";

function openLink(url: string) {
  window.open(url, "_blank");
}

const aboutContent = (
  <div>
    <p> For my 4<sup>th</sup> year honours project, I authored a dissertation and developed a solution which investigated the feasibility of test automation during a game's testing lifecycle. </p>
    <p> The developed application implemented deep reinforcement learning and emulated hardware (controller and keyboard & mouse) to develop autonomous agents capable of traveling through an environment. </p>
    <p> It was an interesting insight into artificial intelligence, and more specifically the capabilities of reinforcement learning and machine learning. </p>
    <a style={{ backgroundColor: "#3d3e40", display: "inline-block", margin: "0 auto", color: "white", fontFamily: "HankenGrotesk", textAlign: "center", padding: "10px" }} href="https://8c498166-74b7-4f2e-8836-2054a1475c6f.filesusr.com/ugd/fa0080_458e10ac04f1472bbf31124a87d0e7b7.pdf">Dissertation</a>

  </div>
);

const contributionContent = (
  <div>
    <p> I was responsible for the creation of the enemies - with this I created a spawning system which increased the amount of enemies that can be spawned in the game at once which gradually increases overtime to make game progressively more challenging.
    </p>
  </div>
);

const galleryContent = (
    <div>
      <img src="honours4.png" className="img-fluid" alt="..." />
      <img src="honours2.png" className="img-fluid" alt="..." />
      <img src="honours3.png" className="img-fluid" alt="..." />
    </div>
);

const linksContent = (
  <div>
    <SocialIcon bgColor="#3d3e40" className="img-fluid" style={{ width: '100px', height: '100px', marginRight: '10px'}} url="https://soaringturtle.itch.io/fast-feud" />
    <SocialIcon bgColor="#3d3e40" className="img-fluid" style={{ width: '100px', height: '100px', marginRight: '10px'}} url="https://github.com/NathanFordyce/Honours-Project" />
  </div>
);

const MLAgents: React.FC = () => {
  const languages = [TbBrandCSharp, FaUnity];

  return (
    <Template
      titleContent="ML Agents"
      aboutContent={aboutContent}
      contributionContent={contributionContent}
      galleryContent={galleryContent}
      linksContent={linksContent}
      languages={languages} // Pass the languages array to the Template component
    />
  );
};

export default MLAgents;
