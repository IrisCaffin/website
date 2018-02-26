import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Jumbotron from '../jumbotron/Jumbotron';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Projects" subtitle="have a look at what I've been tinkering at…"/>
        <div className="container">
          <h2>Projects</h2>
          <br />
          <div className="container marketing">
            <div className="row">
              <div className="col-lg-4">
                <img className="ravenous" alt=""/>
                <h2>Ravenous</h2>
                <h6 className="purple">ReactJS</h6>
                <p>A Yelp-like website that allows the user to search for a restaurant, view a list of restaurants returned by the Yelp API, and sort through restaurants using a filter.</p>
                <p><a className="btn btn-secondary" href="http://ravenous-icaffin.surge.sh/" target="_blank" rel="noopener noreferrer" role="button">View details »</a></p>
              </div>
              <div className="col-lg-4">
                <img className="jammming" alt=""/>
                <h2>Jammming</h2>
                <h6 className="purple">ReactJS</h6>
                <p>A playlist creator website that with the Spotify API allows a user to search the Spotify library, create custom playlists, and then save it to their Spotify account.</p>
                <p><a className="btn btn-secondary" href="http://jammmingiris.surge.sh/" target="_blank" rel="noopener noreferrer" role="button">View details »</a></p>
              </div>
              <div className="col-lg-4">
                <img className="doggie-treats" alt=""/>
                <h2>Pawze</h2>
                <h6 className="purple">C#/.NET</h6>
                <p>The Pawze website has yummy treats for your four-legged friend and lets you setup a monthly subscription for a customizable box of your dog&#39;s favorite treats.</p>
                <p><a class="btn btn-secondary" href="https://portfolium.com/entry/pawze" target="_blank" rel="noopener noreferrer" role="button">View details »</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
