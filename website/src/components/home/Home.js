import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Jumbotron from '../jumbotron/Jumbotron';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="to my website/portfolio"/>
        <div className="container">
          <h2>Welcome</h2>
          <br/>
            <div className="row featurette">
             <div className="col-md-7 push-md-5">
               <h2>Hello</h2>
               <h4 className="purple">I'm Iris Caffin</h4>
               <p>I am a Web Developer specializing in front-end development with a background in television production. Versed in numerous programming languages including ReactJS, JavaScript, HTML/CSS, and Sass.</p><br/>
               <h6 className="purple">LinkedIn</h6>
               <p>Check out my LinkedIn page <a href="https://www.linkedin.com/in/iriscaffin/" target="_blank" rel="noopener noreferrer">here</a>.</p>
                 <h6 className="purple">GitHub</h6>
                 <p>Check out my GitHub <a href="https://github.com/IrisCaffin" target="_blank" rel="noopener noreferrer">here</a>.</p>
             </div>
             <div className="col-md-5 pull-md-7">
               <img className="iris" alt=""/>
             </div>
           </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
