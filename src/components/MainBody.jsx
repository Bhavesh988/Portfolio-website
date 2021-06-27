import React from "react";
import Typed from 'react-typed';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const MainBody = React.forwardRef(
  ({gradient}, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(120deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
           <h4>HI THERE👋, I’M</h4>
          <h1 ref={ref} className="display-1">
            Bhavesh Choudhari
          </h1>
          <Typed
          className="typed"
          strings={['',
            'Machine Learning Enthusiast',
            'Full Stack Developer',
            'Open Source',
        ]}
          typeSpeed={60}
          backSpeed={40}
          backDelay={1000}
          loop>
          </Typed>
          <div className="p-5">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Bhavesh988" aria-label="My github">
            <i className="fab fa fa-github  fa-3x socialicons"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/choudhari_b/" aria-label="My instagram">
            <i className="fab fa fa-instagram  fa-3x socialicons"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bhavesh-choudhari-baa15b171/" aria-label="My linkedin">
            <i className="fab fa fa-linkedin  fa-3x socialicons"></i>
          </a>
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
