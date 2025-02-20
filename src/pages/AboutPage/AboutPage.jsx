import React from 'react';
import './AboutPage.scss';

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-page__title">About Me</h1>
      <div className="about-page__content">
        <div className="about-page__subsection">
          <div className="about-page__image-container">
            <img src="../assets/me.jpeg" alt="Aswini Viswanath" className="about-page__image" />
          </div>
          <div className="about-page__text">
            <p className="about-page__subtitle">
              Hello! I'm <strong>Aswini Viswanath</strong>, a passionate <strong>UI/UX Designer</strong> and <strong>Frontend Developer</strong> with over 7 years of experience in creating user-centric digital solutions.
            </p>
            <p className="about-page__subtitle">
              My journey in the world of design and development has been driven by a desire to bridge the gap between aesthetics and functionality, creating user-centric interfaces.
            </p>
          </div>
        </div>

        <div className="about-page__subsection">
          <h2 className="about-page__heading">Skills</h2>
          <ul className="about-page__skills">
            <li>UI/UX Design</li>
            <li>Front-end Development</li>
            <li>React.js</li>
            <li>User Research</li>
            <li>Prototyping</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div className="about-page__subsection">
          <h2 className="about-page__heading">Teaching & Mentorship</h2>
          <p className="about-page__subtitle">
            I love sharing my knowledge and experience with others. As a <strong>UI/UX Instructor</strong> at Cornerstone International Community College of Canada, I taught students design principles, prototyping, and front-end development. It’s incredibly rewarding to   my students grow and succeed in the industry!
          </p>
        </div>

        <div className="about-page__subsection">
          <h2 className="about-page__heading">Travel & Photography</h2>
          <p className="about-page__subtitle">
            When I’m not designing or coding, you’ll find me exploring new places and capturing moments through my camera lens. Traveling fuels my creativity, and photography helps me see the world from unique perspectives.
          </p>
          <div className="about-page__gallery">
            <img src="/images/travel1.jpg" alt="Travel Photo 1" className="about-page__gallery-image" />
            <img src="/images/travel2.jpg" alt="Travel Photo 2" className="about-page__gallery-image" />
            <img src="/images/travel3.jpg" alt="Travel Photo 3" className="about-page__gallery-image" />
          </div>
        </div>

        <div className="about-page__subsection">
          <h2 className="about-page__heading">Let’s Connect!</h2>
          <p className="about-page__subtitle">
            Feel free to reach out if you’d like to collaborate or just chat about design, development, or travel! You can find me on:
          </p>
          <ul className="about-page__social-links">
            <li><a href="https://github.com/ashuiux" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/aswiniviswanath" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.behance.net/aswini" target="_blank" rel="noopener noreferrer">Behance</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;