import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h2 className="about__title">Acerca de</h2>
      <p className="about__description">
        Esta es la página de información sobre nosotros.
      </p>
    </div>
  );
};

export default About;
