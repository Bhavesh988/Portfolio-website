import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../hooks/useScrollPosition";

function Skills() {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const  hardSkills= [
    { name: "Python", value: 90 },
    { name: "SQL", value: 80 },
    { name: "Data Structures", value: 75 },
    { name: "C", value: 80 },
    { name: "C++", value: 80 },
    { name: "Dart", value: 75 },
    { name: "TypeScript", value: 90 },
    { name: "ReactJs", value: 85 },
    { name: "Java", value: 80 },
    { name: "Machine Learning", value: 75 },
    { name: "Django", value: 60 },
    { name: "Deep Learning", value: 60 },
  ];
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-black m-0" id="skills">
      <h2 ref={skillsTabRef} className="headin-2-ed">Skills</h2>
      <Container className="p-5 ">
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
        >
          <Tab
            tabClassName="skills-tab lead-black"
            eventKey="hard-skills"
            title="Technical Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
