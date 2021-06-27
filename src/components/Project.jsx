import React from "react";
import Link from "../assets/img/link.svg";
import Github from "../assets/img/github.svg";
const Project = () => {
  return (
    <div id="main">
    <section id="projects" className="project">
      <h2 className="heading-2">Projects</h2>
       <div className="project-box__wrapper">
          <div className="project-box">
            <div className="project-box__link">
              <a href="https://github.com/Bhavesh988/Githubfinder" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github logo"></img></a>            
              <a href="https://githubfinder-37hsce05u.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={Link} alt="link icon"></img></a>
            </div>
            <div className="project-box__content">
                <h3 className="heading-3 mb-l">Github Finder</h3>
                <h5 className="heading-5 mb-p">Github API &nbsp; ReactJS &nbsp; ChartJS</h5>
             </div>
          </div>
          <div className="project-box">
            <div className="project-box__link">
              <a href="https://github.com/Bhavesh988/Midas_Task" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github logo"></img></a>            
            </div>
            <div className="project-box__content">
                <h3 className="heading-3 mb-l">Natural Language Processing</h3>
                <h5 className="heading-5 mb-p">Jupyter Notebook</h5>
             </div>
          </div>
          <div className="project-box">
            <div className="project-box__link">
              <a href="https://github.com/Bhavesh988/Bhavesh988.github.io" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github logo"></img></a>            
              <a href="https://bhavesh988.github.io/" target="_blank" rel="noopener noreferrer"><img src={Link} alt="link icon"></img></a>
            </div>
            <div className="project-box__content">
                <h3 className="heading-3 mb-l">Sorting Visualizer</h3>
                <h5 className="heading-5 mb-p"> HTML &nbsp; CSS &nbsp; TypeScript </h5>
             </div>
          </div>
          <div className="project-box">
            <div className="project-box__link">
              <a href="https://github.com/Bhavesh988/Price-Monitoring" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github logo"></img></a>    
            </div>
            <div className="project-box__content">
                <h3 className="heading-3 mb-l">Price Monitoring</h3>
                <h5 className="heading-5 mb-p">Python</h5>
             </div>
          </div>
          <div className="project-box">
            <div className="project-box__link">
              <a href="https://github.com/Bhavesh988/live_web" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github logo"></img></a>            
              <a href="https://livewebb-ka8o6w4qc.vercel.app/ " target="_blank" rel="noopener noreferrer"><img src={Link} alt="link icon"></img></a>
            </div>
            <div className="project-box__content">
                <h3 className="heading-3 mb-l">Live Web</h3>
                <h5 className="heading-5 mb-p">Pusher API &nbsp; ReactJS</h5>
             </div>
          </div>
          <div className="project-box">
            <div className="project-box__link">
              <a href="https://github.com/Bhavesh988/Decision-Tree" target="_blank" rel="noopener noreferrer"><img src={Github} alt="github logo"></img></a>            
            </div>
            <div className="project-box__content">
                <h3 className="heading-3 mb-l">Machine Learning</h3>
                <h5 className="heading-5 mb-p">Jupyter Notebook</h5>
             </div>
          </div>
       </div>
    </section>
    </div>
  );
};

export default Project;

