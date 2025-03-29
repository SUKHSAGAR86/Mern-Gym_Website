
import React from "react";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1>
            About <span>Beast Mode Gym</span>
          </h1>
          <p>
            Welcome to <strong>Beast Mode Gym</strong>, where fitness meets
            passion! We provide world-class training facilities, expert coaches,
            and a motivating environment to help you achieve your fitness goals.
            Whether you're a beginner or an advanced athlete, our gym is
            designed to push your limits.
          </p>
          <p>
            Our mission is to transform lives through fitness, strength, and
            endurance. Join us and be part of a community that never settles for
            less!
          </p>
          <a href="/contact" className="btn">
            Join Us Today
          </a>
        </div>
        <div className="about-image">
          <img
            src="/Aboutus.jpg"
            alt="Gym Workout"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
