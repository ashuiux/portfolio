import React, { useState } from "react";
import "./AboutPage.scss";
// All image imports below
import figma from "../../../public/assets/figma_logo.svg";
import Illustrator from "../../../public/assets/logos_adobe-illustrator.svg";
import Photoshop from "../../../public/assets/logos_adobe-photoshop.svg";
import Premiere from "../../../public/assets/logos_adobe-premiere.svg";
import Xd from "../../../public/assets/logos_adobe-xd.svg";
import Invision from "../../../public/assets/logos_invision-icon.svg";
import Sketch from "../../../public/assets/sketch_logo.svg";
import HTML5 from "../../../public/assets/front_html5.svg";
import Express from "../../../public/assets/back_expressjs.svg";
import FastAPI from "../../../public/assets/back_fastAPI.svg";
import Axios from "../../../public/assets/back_axios.svg";
import Postman from "../../../public/assets/back_Postman.svg";
import Jest from "../../../public/assets/front_jest.svg";
import GoogleClassroom from "../../../public/assets/google-classroom.svg";
import AfterEffects from "../../../public/assets/logos_adobe-after-effects.svg";
import Sharepoint from "../../../public/assets/sharepoint.svg";
import Usertesting from "../../../public/assets/user_testing.svg";
import Maze from "../../../public/assets/maze.svg";
import OptimalWorkshop from "../../../public/assets/optimal_workshop.svg";
import Coda from "../../../public/assets/coda.svg";
import Wordpress from "../../../public/assets/wordpress.svg";
import Firebase from "../../../public/assets/firebase.svg";
import Moodle from "../../../public/assets/moodle.svg";
import Framer from "../../../public/assets/framer.svg";
import Unbounce from "../../../public/assets/unbounce.svg";
import Surveymonkey from "../../../public/assets/surveymonkey.svg";
import MySQL from "../../../public/assets/back_mysql.svg";
import Nodejs from "../../../public/assets/back_nodejs.svg";
import Slack from "../../../public/assets/devicon_slack.svg";
import Git from "../../../public/assets/etc_git.svg";
import Heroku from "../../../public/assets/etc_heroku.svg";
import Jira from "../../../public/assets/etc_jira.svg";
import Netlify from "../../../public/assets/etc_netlify.svg";
import Notion from "../../../public/assets/etc_notion.svg";
import VSCode from "../../../public/assets/etc_vscode.svg";
import Angular from "../../../public/assets/front_angular.svg";
import Bootstrap from "../../../public/assets/front_bootstrap.svg";
import CSS from "../../../public/assets/front_css.svg";
import JS from "../../../public/assets/front_js.svg";
import Reactlogo from "../../../public/assets/front_react.svg";
import Sass from "../../../public/assets/front_sass.svg";
import Tailwind from "../../../public/assets/front_tailwind.svg";
import TypeScript from "../../../public/assets/front_typescript.svg";
import GoogleWebDesigner from "../../../public/assets/googlewebdesigner.svg";
import Squarespace from "../../../public/assets/lineicons_squarespace.svg";
import Webflow from "../../../public/assets/lineicons_webflow.svg";
import Asana from "../../../public/assets/logos_asana-icon.svg";
import Analytics from "../../../public/assets/logos_google-analytics.svg";
import Hotjar from "../../../public/assets/logos_hotjar-icon.svg";
import Trello from "../../../public/assets/logos_trello.svg";
import Mailchimp from "../../../public/assets/mailchimp.svg";

function AboutPage() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = "auto";
  };

  const tools = [
    { src: figma, label: "Figma" },
    { src: Sketch, label: "Sketch" },
    { src: Invision, label: "InVision" },
    { src: Photoshop, label: "Photoshop" },
    { src: Illustrator, label: "Illustrator" },
    { src: AfterEffects, label: "After Effects" },
    { src: Premiere, label: "Premiere Pro" },
    { src: Xd, label: "Adobe XD" },
    { src: GoogleWebDesigner, label: "Google Web Designer" },
    { src: HTML5, label: "HTML5" },
    { src: CSS, label: "CSS3" },
    { src: JS, label: "JavaScript" },
    { src: Reactlogo, label: "React" },
    { src: Angular, label: "Angular" },
    { src: Sass, label: "Sass" },
    { src: Bootstrap, label: "Bootstrap" },
    { src: Tailwind, label: "Tailwind" },
    { src: TypeScript, label: "TypeScript" },
    { src: Nodejs, label: "Node.js" },
    { src: Express, label: "Express.js" },
    { src: MySQL, label: "MySQL" },
    { src: Heroku, label: "Heroku" },
    { src: Jest, label: "Jest" },
    { src: FastAPI, label: "FastAPI" },
    { src: Axios, label: "Axios" },
    { src: Postman, label: "Postman" },
    { src: Git, label: "Git" },
    { src: VSCode, label: "VSCode" },
    { src: Netlify, label: "Netlify" },
    { src: Squarespace, label: "Squarespace" },
    { src: Webflow, label: "Webflow" },
    { src: Framer, label: "Framer" },
    { src: Unbounce, label: "Unbounce" },
    { src: Wordpress, label: "WordPress" },
    { src: OptimalWorkshop, label: "Optimal Workshop" },
    { src: Maze, label: "Maze" },
    { src: Usertesting, label: "UserTesting" },
    { src: Firebase, label: "Firebase" },
    { src: Analytics, label: "Google Analytics" },
    { src: Mailchimp, label: "Mailchimp" },
    { src: Hotjar, label: "Hotjar" },
    { src: Surveymonkey, label: "Survey Monkey" },
    { src: Asana, label: "Asana" },
    { src: Trello, label: "Trello" },
    { src: Jira, label: "Jira" },
    { src: Slack, label: "Slack" },
    { src: Notion, label: "Notion" },
    { src: Sharepoint, label: "Sharepoint" },
    { src: Coda, label: "Coda" },
    { src: GoogleClassroom, label: "Google Classroom" },
    { src: Moodle, label: "Moodle" },
  ];

  return (
    <>
      {modalImage && (
        <div className="about-page__modal" onClick={closeModal}>
          <button className="about-page__modal-close" onClick={closeModal}>
            &times;
          </button>
          <img src={modalImage} alt="Enlarged view" />
        </div>
      )}

      <div className="about-page">
        <div className="about-page__scrollbar">
          <div style={{ width: "var(--scroll-progress)" }} />
        </div>

        <div className="about-page__content">
          <div className="about-page__subsection">
            <div className="about-page__image-container">
              {/* <img src="../assets/me.jpeg" alt="Aswini Viswanath" className="about-page__image" /> */}
            </div>
            <div className="about-page__text">
              <h2 className="about-page__title">
                {" "}
                I am a Front-end Devoleper @ CM2 Solutions, General Motors{" "}
                <br />a hybrid who blends the artistry of design with the logic
                of code. With over 8 years of experience spanning UX/UI design,
                graphic design, and education, I specialize in crafting
                intuitive, user-centered experiences.
              </h2>
            </div>
          </div>

          <div className="about-page__subsection about-page__teaching">
            <div className="about-page__text">
              <h2 className="about-page__heading">Teaching & Mentorship</h2>
              <p className="about-page__subtitle">
                I love sharing my knowledge and experience with others. As a{" "}
                <strong>UI/UX Instructor</strong> at Cornerstone International
                Community College of Canada, I taught students design
                principles, prototyping, and front-end development. It’s
                incredibly rewarding to my students grow and succeed in the
                industry!{" "}
              </p>
            </div>

            <img
              src="/assets/teach_1.jpg"
              alt="Teaching Photo 1"
              className="about-page__teaching-image"
              onClick={() => openModal("/assets/teach_1.jpg")}
            />
          </div>

          <div className="about-page__subsection about-page__travel">
            <div className="about-page__gallery">
              <div className="about-page__gallery-card">
                {" "}
                <img
                  src="/assets/travel_1.jpg"
                  alt="Travel Photo 1"
                  className="about-page__gallery-image"
                  onClick={() => openModal("/assets/travel_1.jpg")}
                />
                <p> Batu Caves, Malaysia</p>
              </div>
              <div className="about-page__gallery-card">
                {" "}
                <img
                  src="/assets/travel_5.jpg"
                  alt="Travel Photo 1"
                  className="about-page__gallery-image"
                  onClick={() => openModal("/assets/travel_5.jpg")}
                />
                <p> Montreal, Canada</p>
              </div>
              <div className="about-page__gallery-card">
                {" "}
                <img
                  src="/assets/travel_3.jpg"
                  alt="Travel Photo 1"
                  className="about-page__gallery-image"
                  onClick={() => openModal("/assets/travel_3.jpg")}
                />
                <p> Chennai, India</p>
              </div>
              <div className="about-page__gallery-card">
                {" "}
                <img
                  src="/assets/travel_4.jpg"
                  alt="Travel Photo 4"
                  className="about-page__gallery-image"
                  onClick={() => openModal("/assets/travel_4.jpg")}
                />
                <p> Downtown Vancouver, Canada</p>
              </div>
              <div className="about-page__gallery-card">
                {" "}
                <img
                  src="/assets/travel_2.jpg"
                  alt="Travel Photo 1"
                  className="about-page__gallery-image"
                  onClick={() => openModal("/assets/travel_2.jpg")}
                />
                <p> Vancouver, Canada</p>
              </div>
              <div className="about-page__gallery-card">
                {" "}
                <img
                  src="/assets/travel_6.jpg"
                  alt="Travel Photo 1"
                  className="about-page__gallery-image"
                  onClick={() => openModal("/assets/travel_6.jpg")}
                />
                <p> Porteau Cove Provincial Park, Canada</p>
              </div>
            </div>
            <div className="about-page__travel-text">
              <h2 className="about-page__heading">Travel & Photography</h2>
              <p className="about-page__subtitle">
                When I’m not designing or coding, you’ll find me exploring new
                places and capturing moments through my camera lens. Traveling
                fuels my creativity, and photography helps me see the world from
                unique perspectives.
              </p>
            </div>
          </div>

          <section className="tools-section">
            <h2 className="tools-section__heading">
              Tools I Use to Design, Build & Improve Digital Experiences
            </h2>
            <p className="tools-section__subtitle">
              Here are some of the tools I use to bring ideas to life—from
              designing to coding to teaching.
            </p>

            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div className="tool-item" key={index}>
                  <img
                    src={tool.src}
                    alt={`${tool.label} Logo`}
                    className="tool-icon"
                  />
                  <span className="tool-label">{tool.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
