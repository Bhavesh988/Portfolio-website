import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Chat from "./components/Chat.jsx";
const Home = React.forwardRef((props, ref) => {
  // console.log(ref)
  // console.log(props)
  return (
    <>
      <MainBody
        gradient="#728FCE,#632B6C,#C76C98,#a2c1ff,#97e7a2"
        ref={ref}
      />
      <AboutMe/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Chat/>
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Navbar ref={titleRef}/>
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
    </BrowserRouter>
  );
};

export default App;
