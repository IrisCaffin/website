import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Jumbotron from '../jumbotron/Jumbotron';

class Resume extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Resume" subtitle="a career & academic overview"/>
        <div className="container">
          <h2>Resume</h2>
          <br/>
          <h4>Career</h4>
          <br/>
          <h5>NTN Buzztime, Inc. | Associate Web Developer, 2016–Present</h5>
          <h6>Migrating main company website from JavaScript, HTML/CSS (Joomla/WordPress) to ReactJS/Sass</h6>
          <ul>
            <li>Ensured consistent page appearance/behavior across multiple browsers (IE8+, FF, Chrome, Safari)</li>
            <li>Developed/Improved website UI to ensure more attractive and user-friendly experience</li>
            <li>Applied PCI compliant standards and adopted version control techniques to guarantee efficient, reliable code in an agile development environment</li>
          </ul>
          <h6>Provide ungoing support for ReactJS website as well as Joomla/WordPress websites</h6>
          <ul>
            <li>Support WordPress lead-gen website with aiding in form funnel development, page creation, and tracking</li>
            <li>Develop new promotions and perform routine website updates for main ReactJS website</li>
            <li>Maintain three other websites (WordPress/Joomla) providing new feature support and ongoing maintenance</li>
          </ul>
          <br/>
          <h5>Snapshot of my Television Production background</h5>
          <h6>Freelance/Contracted, 2007–2015</h6>
          <ul>
            <li>Field Producer | Documentary – Moores Cancer Center</li>
            <li>Co-Producer | Peace Day TV – Peace Day Global Broadcast</li>
            <li>Associate Producer | The History Channel – Swamp People</li>
            <li>Production Assistant | KPBS – Television Production, New Media (Web), Radio News</li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Resume;
