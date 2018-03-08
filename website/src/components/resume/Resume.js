import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Jumbotron from '../jumbotron/Jumbotron';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Resume" subtitle="a career & academic overview"/>
        <div className="container">
          <br/>
          <h2>Career</h2>
          <br/>
          <h5>NTN Buzztime, Inc. | Associate Web Developer, 2016–Present</h5>
          <h6 className="purple">Migrating main company website from JavaScript, HTML/CSS (Joomla/WordPress) to ReactJS/Sass</h6>
          <ul>
            <li>Ensured consistent page appearance/behavior across multiple browsers (IE8+, FF, Chrome, Safari)</li>
            <li>Developed/Improved website UI to ensure more attractive and user-friendly experience</li>
            <li>Applied PCI compliant standards and adopted version control techniques to guarantee efficient, reliable code in an agile development environment</li>
          </ul>
          <h6 className="purple">Provide ongoing support for ReactJS website as well as Joomla/WordPress websites</h6>
          <ul>
            <li>Support WordPress lead-gen website with sales funnel development, page creation, and tracking</li>
            <li>Develop new promotions and perform routine website updates for main ReactJS website</li>
            <li>Maintain three other websites (Joomla/WordPress) providing new feature support and ongoing maintenance</li>
          </ul>
          <br/>
          <h5>Snapshot of my Television Production Background</h5>
          <h6 className="purple">Freelance/Contracted, 2007–2015</h6>
          <ul>
            <li>Field Producer | Documentary – Moores Cancer Center</li>
            <li>Co-Producer | Peace Day TV – Peace Day Global Broadcast</li>
            <li>Associate Producer | The History Channel – Swamp People</li>
            <li>Production Assistant | KPBS – Television Production, New Media (Web), Radio News</li>
          </ul>
          <p className="details">*For more television production details check out my LinkedIn profile <a href="https://www.linkedin.com/in/iriscaffin/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
        <br/>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Programming</h2>
              <h6 className="purple">Current Focus:</h6>
              <p>ReactJS, JavaScript, HTML/CSS, Sass</p>
              <h6 className="purple">Dabbled in/Worked with:</h6>
              <p>C#/.NET, AngularJS, Python, SQL</p>
            </div>
            <div className="col-md-4">
              <h2>Education</h2>
              <h6 className="purple">San Diego State University</h6>
              <p>Bachelor of Science degree – 2009<br/>Television, Film and New Media Production</p>
              <h6 className="purple">San Diego State University</h6>
              <p>Master of Arts degree – 2011<br/>Television, Film and New Media Production</p>
           </div>
            <div className="col-md-4">
              <h2>Certifications</h2>
              <h6 className="purple">Origin Code Academy</h6>
              <p>Full Stack Development – 2016<br/>C#/.NET, JavaScript, HTML/CSS, SQL</p>
              <h6 className="purple">Codecademy Pro Intensive</h6>
              <p>Front End Web Apps – 2017<br/>JavaScript, ReactJS, HTML/CSS</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
