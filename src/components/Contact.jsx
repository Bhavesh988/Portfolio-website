import React from "react";

const Contact = () => {
  return (
  <section id="contact">
    <div id="education">
      <h2 className="headin-2-ed">Contact</h2>
      <br></br>
      <br></br>
      <div className="lead text-center pb-3">
        <h4 className="text-center">Email</h4>
        <a href={`mailto:bhaveshparihyar988@gmail.com`} id="mail_h">bhaveshparihyar988@gmail.com</a>
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
      </div>
    </div>
    </section>
  );
};

export default Contact;
