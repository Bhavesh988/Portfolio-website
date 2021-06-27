import React, { useEffect } from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  setQuickButtons
} from "../External_Package/react-chat-widget";

import "../External_Package/react-chat-widget/lib/styles.css";

function Chat() {
  useEffect(() => {
    addResponseMessage("Hi, I am Bhavesh's Resume Bot!");
    addResponseMessage(
      "To know more about Bhavesh, click on one of the buttons below "
    );
    setQuickButtons(buttons);
  }, []);
  const about_list = ["about"];
  const education_list = [
    "education",
    "study",
    "studied",
    "qualification",
    "qualifications",
    "pursuing",
    "studying"
  ];
  const skills_list = ["skill", "skills"];
  const resume_list = ["resume", "cv"];
  const contact_list = [
    "contact",
    "mail",
    "email",
    "linkedin",
    "instagram",
    "github"
  ];
  // const github="[https://www.github.com/Bhavesh988](https://www.github.com/Bhavesh988)";
  const about_response =
    "Bhavesh is a Final year CS student at PVG COET.\n\nHe is a quick learner, passionate about what to do and is focussed.\n\n He is a machine learning enthusiast, full stack developer and a open source contributor";
  const education_response =
    "Bhavesh is a Final Year Computer Engineering Student, currently studying at  Pune Vidyarthi Griha's College of Engineering and Technology. He has a CGPA of 8.78.\n\nHe completed his HSC (Science) in 2018 from Arihant College with 86.5%.\n\nHe completed his ICSE from Bishop's Co-Ed School in 2016 with 91.2%.";
  const resume_response =
    "Hi, above is the link to Bhavesh's resume.";
  const skills_response =
    "Bhavesh has technical skills such as - \n\n Programming Languages: ​Dart, Python, Java, C++, C\n\nDatabases: Firebase,MYSQL\n\nDomains: ​ Machine Learning, Data Science,Deep Learning\n\nTools: ​ Git,MS Excel,Jupyter Notebook,Google Cloud\n\nLibraries: ​ matplotlib, seaborn, beautiful soup\n\nWeb Developmen​t: HTML, CSS, JavaScript, Django,ReactJs\n\n";
  const contact_response =
    "Hi, Here are Bhavesh's Contacts\n\nMail:\n\n[bhaveshparihyar988@gmail.com](mailto:bhaveshparihyar988@gmail.com)\n\nGithub:\n\n[https://github.com/bhavesh988](https://github.com/bhavesh988)\n\nInstagram:\n\n [https://www.instagram/choudhari_b](https://www.instagram/choudhari_b)\n\nLinkedIn:\n\n [https://www.linkedin.com/in/bhavesh-choudhari-baa15b171](https://www.linkedin.com/in/bhavesh-choudhari-baa15b171)";
  const resume_response1="Hi, Here is Bhavesh's Resume\n\n[Click Me](https://drive.google.com/file/d/1MX0CWB9zuCDe7ut-i-8gJFEZqU1VBU2C/view?usp=sharing)"
    const buttons = [
    { label: "About", value: about_response },
    { label: "Education", value: education_response },
    { label: "Skills", value: skills_response },
    { label: "Contact", value: contact_response },
    { label: "Resume", value: resume_response1}
  ];
  const handleNewUserMessage = (newMessage) => {
    var message = getWords(newMessage.toLowerCase());
    var generated_msg = msg_check(message);
    addResponseMessage(generated_msg);
  };
  const msg_check = (msg) => {
    // if(search(msg,education_list) === true){
    //     console.
    //   return (education_response)
    // }
    if (
      msg.includes("hi", 0) ||
      msg.includes("hello", 0) ||
      msg.includes("hey", 0)
    ) {
      return "Hello there!";
    } else if (search(msg, about_list) === true) {
      return about_response;
    } else if (search(msg, education_list) === true) {
      return education_response;
    } else if (search(msg, skills_list) === true) {
      return skills_response;
    } else if (search(msg, resume_list) === true) {
      addLinkSnippet({
        title:"Resume Link",
        link:"https://drive.google.com/file/d/1MX0CWB9zuCDe7ut-i-8gJFEZqU1VBU2C/view?usp=sharing",
        target:"_blank"
      });
      return resume_response;
    } else if (search(msg, contact_list) === true) {
      if (msg.includes("mail") || msg.includes("email")) {
        addLinkSnippet({
          title:"Mail",
          link:"mailto:bhaveshparihyar988@gmail.com",
          target:"_blank"
        });
        return "hi, Above is the Mail";
      }
      if (msg.includes("instagram")) {
        addLinkSnippet({
          title:"Instagram",
          link:"https://www.instagram.com/choudhari_b",
          target:"_blank"
        });
        return "hi, Above is the Instagram Link";
      }
      if (msg.includes("github")) {
        addLinkSnippet({
          title:"Github",
          link:"https://www.github.com/Bhavesh988",
          target:"_blank"
        });
        return "hi, Above is the Github Link";
      }
      if (msg.includes("linkedin")) {
        addLinkSnippet({
          title:"LinkedIn",
          link:"https://www.linkedin/in/bhavesh-choudhari-baa15b171",
          target:"_blank"
        });
        return "hi, Above is the LinkedIn Link";
      }
      if (msg.includes("contact") || msg.includes("contacts")){
        return contact_response;
      }
    } else {
      return "I am sorry, I didn't understand what u said";
    }
  };
  const getWords = (text) => {
    let x = text.replace(/[^A-Za-z0-9]+/g, " ");
    let newArr = x.trim().split(" ");
    return newArr;
  };
  const search = (msg, list) => {
    for (var i = 0; i < list.length; i++) {
      if (msg.includes(list[i]) === true) {
        return true;
      }
    }
    return false;
  };
  const handleQuickButtonClicked = (data) => {
    addResponseMessage(data.toString());
  };
  return (
    <div className="chat">
      <Widget
        title={"Bhavesh's Resume Bot"}
        subtitle={""}
        profileAvatar={"https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449_960_720.png"}
        handleNewUserMessage={handleNewUserMessage}
        handleQuickButtonClicked={handleQuickButtonClicked}
      />
    </div>
  );
}

export default Chat;
