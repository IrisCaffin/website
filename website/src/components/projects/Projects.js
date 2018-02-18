import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Jumbotron from '../jumbotron/Jumbotron';

class Projects extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Projects" subtitle="have a look at what I've been tinkering at…"/>
        <div className="container">
          <h2>Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus nisl, suscipit sit amet tellus et, sodales consectetur neque. Morbi ultricies sapien at bibendum pulvinar. Suspendisse rhoncus nulla consectetur dui laoreet auctor. Duis eu ultrices nulla, non mollis est. Fusce at elit vitae augue placerat tincidunt id non nisl. Vestibulum tristique, mauris id tempor pellentesque, tellus odio laoreet enim, vitae faucibus ipsum odio eget sem. Nam eget interdum sapien, eget accumsan odio. Donec tincidunt in ipsum a feugiat. Duis mattis ac risus interdum faucibus. Phasellus nec vulputate ligula. Donec malesuada sed lorem ac faucibus. Praesent id metus a eros venenatis convallis. Ut turpis mi, rhoncus cursus mi vel, rutrum hendrerit libero. Donec nisi quam, vestibulum vitae quam sed, facilisis scelerisque turpis. Curabitur suscipit volutpat massa ac elementum.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
