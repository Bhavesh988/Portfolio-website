import React from 'react';
const Education=()=>{
    return(
        <section id="education"  >
        <h2 className="headin-2">Education</h2>
        <div className="container1">
        <div className="timeline">
            <div className="timeline-container primary">
                <div className="timeline-icon">    
                </div>
                <div className="timeline-body">
                    <h4 className="timeline-title"><span className="badge">Pune Vidyarthi Griha's College of Engineering and Technology</span></h4>
                  <p>&nbsp;B.Tech Computer Science <br></br>&nbsp;8.78 CGPA</p>
                    <p className="timeline-subtitle">&nbsp;2018 - Present</p>
                </div>
            </div>
            <div className="timeline-container danger">
                <div className="timeline-icon">
                </div>
                <div className="timeline-body">
                    <h4 className="timeline-title"><span className="badge">Arihant College of Science</span></h4>
                  <p>&nbsp;Higher Secondary Certificate (12<sup>th</sup> HSC)
                    <br></br>&nbsp;86.5%</p>
                    <p className="timeline-subtitle">&nbsp;2016 - 2018</p>
                </div>
            </div>
            <div className="timeline-container success">
                <div className="timeline-icon">
                </div>
                <div className="timeline-body">
                    <h4 className="timeline-title"><span className="badge">The Bishop's Co-Ed School</span></h4>
                  <p>&nbsp;Indian Certificate of Secondary Education (10<sup>th</sup> ICSE)
                    <br></br>&nbsp;91.2%</p>
                    <p className="timeline-subtitle">&nbsp;2004-2016</p>
                </div>
            </div>
        </div>
    </div>
    </section>
    );
};

export default Education;
