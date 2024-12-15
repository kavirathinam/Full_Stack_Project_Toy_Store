import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="page-title">About Us</h1>
      <p className="about-us-description">
        Welcome to <strong>Playtime Paradise</strong> – Where Fun and Imagination Begin!
      </p>

      <div className="our-story">
        <h2>Our Story</h2>
        <p>
          At Playtime Paradise, we believe in the magic of play and the joy that toys bring to children and families.
          Our journey began with a simple idea: to create a store that offers a wide range of toys that inspire creativity, learning, and endless fun.
          We envisioned a place where children could find their new favorite toy and parents could trust in the quality and safety of every product.
        </p>
      </div>

      <div className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to spark imagination and create joyful memories through the power of play.
          We are passionate about offering toys that are not only fun but also educational, safe, and designed to nurture creativity and development.
          We are dedicated to helping families find toys that bring happiness and foster growth.
        </p>
      </div>

      <div className="what-sets-us-apart">
        <h2>What Sets Us Apart</h2>
        <ul>
          <li>Commitment to Safety: We ensure that every toy meets the highest safety standards, giving parents peace of mind.</li>
          <li>Educational Value: Our toys are carefully selected to encourage learning and development through play.</li>
          <li>Imaginative Play: We offer a variety of toys that fuel imagination, from classic favorites to innovative new creations.</li>
          <li>Supporting Families: Our store is a family-friendly space where every child can find something they love.</li>
        </ul>
      </div>

      <div className="our-community">
        <h2>Our Community</h2>
        <p>
          Playtime Paradise is more than just a toy store; it's a hub of creativity, learning, and fun.
          We encourage families to connect, share, and explore the joy of play together.
          Our events, workshops, and activities are designed to bring people together and celebrate the wonder of childhood.
        </p>
      </div>

      <div className="join-us">
        <h2>Join Us</h2>
        <p>
          Whether you're searching for the perfect toy or looking to join our playful community,
          Playtime Paradise is your destination. Come explore our world of toys and discover the magic of play!
        </p>
      </div>

      <p className="contact-info">
        If you have any questions or would like to get in touch, please don't hesitate to contact us at <strong>contact@playtimeparadise.com</strong>.
      </p>
    </div>
  );
};

export default AboutUs;
