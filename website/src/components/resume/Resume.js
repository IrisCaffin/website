import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Jumbotron from '../jumbotron/Jumbotron';

class Resume extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Resume" subtitle="an academic/career overview"/>
        <div className="container">
          <h2>Resume</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus nisl, suscipit sit amet tellus et, sodales consectetur neque. Morbi ultricies sapien at bibendum pulvinar. Suspendisse rhoncus nulla consectetur dui laoreet auctor. Duis eu ultrices nulla, non mollis est. Fusce at elit vitae augue placerat tincidunt id non nisl. Vestibulum tristique, mauris id tempor pellentesque, tellus odio laoreet enim, vitae faucibus ipsum odio eget sem. Nam eget interdum sapien, eget accumsan odio. Donec tincidunt in ipsum a feugiat. Duis mattis ac risus interdum faucibus. Phasellus nec vulputate ligula. Donec malesuada sed lorem ac faucibus. Praesent id metus a eros venenatis convallis. Ut turpis mi, rhoncus cursus mi vel, rutrum hendrerit libero. Donec nisi quam, vestibulum vitae quam sed, facilisis scelerisque turpis. Curabitur suscipit volutpat massa ac elementum.
          </p>
          <p>
            Donec porttitor nunc eu massa cursus eleifend. Integer vitae nisl mollis ligula convallis dignissim quis ac arcu. Morbi orci odio, convallis id auctor a, gravida at nunc. Nulla eros mi, feugiat quis dictum vel, mattis quis sapien. Duis ac eleifend nisl. Aenean quis maximus ante. Morbi nec nisl dolor. Praesent mattis, leo vel elementum volutpat, augue lacus fermentum tortor, sit amet condimentum augue lectus quis ex. Duis tristique lectus ut ultrices malesuada. Ut scelerisque interdum tortor sed pellentesque. Praesent tellus enim, dictum vel tempor at, egestas nec justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras pellentesque dapibus tempor. Fusce in ullamcorper ipsum.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Resume;
