import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand className={` fixed  ${
        !isTop ? "brand-white" : "brand-black"
      }`} href={process.env.PUBLIC_URL + "/#home"}>
        {`<Bhavesh/>`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link
              className={` nav-link lead  ${
                !isTop ? "nav-link lead-white" : "nav-link lead-black"
              }`}
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </Nav.Link>
            <Nav.Link
            className={` nav-link lead  ${
              !isTop ? "nav-link lead-white" : "nav-link lead-black"
            }`}
              href={process.env.PUBLIC_URL + "/#education"}
            >
              Education
            </Nav.Link>
            <Nav.Link
            className={` nav-link lead  ${
              !isTop ? "nav-link lead-white" : "nav-link lead-black"
            }`}
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </Nav.Link>
            <Nav.Link
            className={` nav-link lead  ${
              !isTop ? "nav-link lead-white" : "nav-link lead-black"
            }`}
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </Nav.Link>
            <Nav.Link
            className={` nav-link lead  ${
              !isTop ? "nav-link lead-white" : "nav-link lead-black"
            }`}
              href={process.env.PUBLIC_URL + "/#contact"}
            >
              Contact
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
