import React from "react";
import TagCloud from '../tagcloud/index';


const AboutMe = () => {
  const tagName = ['Java', 'Javascript', 'C', 'C++', 'Git','MySQL', 'ReactJs','Flutter', 'DeepLearning', 'Dart' ,'Django','MachineLearning', 'Typescript', 'Python'];
  return (
    <div id="aboutme" className="aboutme">
      <section className="myself">
      <h2 className="headin-2 text-center">About Me</h2>
          <div className="myself-box">
            <div className="myself-cloud">
            <p className="lead text-center">I am currently in my final year of Computer Engineering at PVG's COET and will graduate in 2022. I am a quick learner, passionate about what I do and focused. Currently, I am learning Deep Learning and looking for internships in Machine Learning and Deep Learning.</p>
              <p className="text-center">
                <a
                  className="btn btn-outline-light btn-lg"
                  href="https://drive.google.com/file/d/1m4RYxH1SBHLNWzrw913kpcI3RZ_dJWRu/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            </div>
            <div className="myself-cloud tag">
              <TagCloud tagName={tagName} speed={3}></TagCloud>
            </div>
          </div>
      </section>
    </div>
  );
};

export default AboutMe;
