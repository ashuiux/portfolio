import React from "react";
import "./AboutPage.scss";
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
  return (
    <div className="about-page">
      <h2 className="about-page__title">
        I'm Aswini, Unicorn Designer-Developer <br /> a hybrid who blends the
        artistry of design <br />
        with the logic of code. Fueled by curiosity, passion, and pixel-perfect
        details
      </h2>
      <div className="about-page__content">
        <div className="about-page__subsection">
          <div className="about-page__image-container">
            {/* <img src="../assets/me.jpeg" alt="Aswini Viswanath" className="about-page__image" /> */}
          </div>
          <div className="about-page__text">
            <p className="about-page__subtitle"></p>
            <p className="about-page__subtitle"></p>
          </div>
        </div>

        <div className="about-page__subsection">
          <h3 className="about-page__heading">Design & Prototyping Tools </h3>
          <ul className="about-page__skills">
            <li>
              <img src={figma} alt="Figma Logo" /> Figma
            </li>
            <li>
              <img src={Sketch} alt="Sketch Logo" />
              Sketch
            </li>

            <li>
              <img src={Invision} alt="Invision Logo" />
              InVision
            </li>
            <li>
              <img src={Photoshop} alt="Photoshop Logo" />
              Adobe Photoshop
            </li>
            <li>
              <img src={Illustrator} alt="Illustrator Logo" />
              Adobe Illustrator
            </li>
            <li>
              <img src={AfterEffects} alt="Illustrator Logo" />
              Adobe After Effects
            </li>
            <li>
              <img src={Premiere} alt="Premier Logo" />
              Adobe Premiere Pro
            </li>
            <li>
              <img src={Xd} alt="Adobe Xd Logo" />
              Adobe XD
            </li>
            <li>
              <img src={GoogleWebDesigner} alt="Google Web Designer Logo" />{" "}
              Google Web Designer
            </li>
          </ul>
        </div>

        <div className="about-page__subsection">
          <h3 className="about-page__heading">
            Frontend, Backend & Database Technologies{" "}
          </h3>
          <ul className="about-page__skills">
            <li>
              <img src={HTML5} alt="HTML5 Logo" /> HTML5
            </li>
            <li>
              <img src={CSS} alt="CSS3 Logo" /> CSS3
            </li>
            <li>
              <img src={JS} alt="JavaScript Logo" /> JavaScript
            </li>
            <li>
              <img src={Reactlogo} alt="React Logo" /> React
            </li>
            <li>
              <img src={Angular} alt="Angular Logo" /> Angular
            </li>
            <li>
              <img src={Sass} alt="Sass Logo" /> Sass
            </li>
            <li>
              <img src={Bootstrap} alt="Bootstrap Logo" /> Bootstrap
            </li>
            <li>
              <img src={Tailwind} alt="Tailwind CSS Logo" /> Tailwind
            </li>
            <li>
              <img src={TypeScript} alt="TypeScript Logo" /> TypeScript
            </li>
            <li>
              <img src={Nodejs} alt="Node.js Logo" /> Node.js
            </li>
            <li>
              <img src={Express} alt="Express.js Logo" /> Express.js
            </li>
            <li>
              <img src={MySQL} alt="MySQL Logo" /> MySQL
            </li>
            <li>
              <img src={Heroku} alt="Heroku Logo" /> Heroku
            </li>
            <li>
              <img src={Jest} alt="Heroku Logo" /> Jest
            </li>
            <li>
              <img src={FastAPI} alt="Heroku Logo" /> Fast API
            </li>
            <li>
              <img src={Heroku} alt="Heroku Logo" /> Heroku
            </li>
            <li>
              <img src={Axios} alt="Heroku Logo" /> Axios
            </li>
            <li>
              <img src={Postman} alt="Heroku Logo" /> Postman
            </li>
          </ul>
        </div>

        <div className="about-page__subsection">
          <h3 className="about-page__heading">Version Control & DevOps </h3>
          <ul className="about-page__skills">
            <li>
              <img src={Git} alt="Git Logo" /> Git
            </li>
            <li>
              <img src={VSCode} alt="VSCode Logo" /> VSCode
            </li>
            <li>
              <img src={Netlify} alt="Netlify Logo" /> Netlify
            </li>
          </ul>
        </div>

        <div className="about-page__subsection">
          <h3 className="about-page__heading">CMS & Website Builders</h3>
          <ul className="about-page__skills">
            <li>
              <img src={Squarespace} alt="Squarespace Logo" /> Squarespace
            </li>
            <li>
              <img src={Webflow} alt="Webflow Logo" /> Webflow
            </li>
            <li>
              <img src={Framer} alt="Webflow Logo" /> Framer
            </li>
            <li>
              <img src={Unbounce} alt="Webflow Logo" /> Unbounce
            </li>
            <li>
              <img src={Wordpress} alt="Webflow Logo" /> Wordpress
            </li>
          </ul>
        </div>

        <div className="about-page__subsection">
          <h3 className="about-page__heading">
            Research, Analytics & Marketing Tools
          </h3>
          <ul className="about-page__skills">
            <li>
              <img src={OptimalWorkshop} alt="OptimalWorkshop" /> Optimal
              Workshop
            </li>
            <li>
              <img src={Maze} alt="OptimalWorkshop" /> Maze
            </li>
            <li>
              <img src={Usertesting} alt="User testing" /> Usertesting
            </li>
            <li>
              <img src={Firebase} alt="User testing" /> Frebase
            </li>
            <li>
              <img src={Analytics} alt="Google Analytics Logo" /> Google
              Analytics
            </li>
            <li>
              <img src={Mailchimp} alt="Mailchimp Logo" /> Mailchimp
            </li>
            <li>
              <img src={Hotjar} alt="Hotjar Logo" /> Hotjar
            </li>
            <li>
              <img src={Surveymonkey} alt="Survey Monkey" /> Survey Monkey
            </li>
          </ul>
        </div>

        <div className="about-page__subsection">
          <h3 className="about-page__heading">
            Collaboration & Project Management
          </h3>
          <ul className="about-page__skills">
            <li>
              <img src={Asana} alt="Asana Logo" /> Asana
            </li>
            <li>
              <img src={Trello} alt="Trello Logo" /> Trello
            </li>
            <li>
              <img src={Jira} alt="Jira Logo" /> Jira
            </li>
            <li>
              <img src={Slack} alt="Slack Logo" /> Slack
            </li>
            <li>
              <img src={Notion} alt="Notion Logo" /> Notion
            </li>
            <li>
              <img src={Sharepoint} alt="sharepoint" /> Sharepoint
            </li>
            <li>
              <img src={Coda} alt="Coda" /> Coda
            </li>
          </ul>
        </div>

        <div className="about-page__subsection">
          <h3 className="about-page__heading">Learning & Educational Tools</h3>
          <ul className="about-page__skills">
            <li>
              <img src={GoogleClassroom} alt="Asana Logo" /> Google Classroom
            </li>
            <li>
              <img src={Moodle} alt="Trello Logo" /> Moodle
            </li>
          </ul>
        </div>

        <div className="about-page__subsection">
          <h2 className="about-page__heading">Teaching & Mentorship</h2>
          <p className="about-page__subtitle">
            I love sharing my knowledge and experience with others. As a{" "}
            <strong>UI/UX Instructor</strong> at Cornerstone International
            Community College of Canada, I taught students design principles,
            prototyping, and front-end development. It’s incredibly rewarding to
            my students grow and succeed in the industry!
          </p>
          <img
                src="/assets/teach_1.jpg"
                alt="Teaching Photo 1"
                className="about-page__gallery-image"
              />
        </div>

        <div className="about-page__subsection">
          <h2 className="about-page__heading">Travel & Photography</h2>
          <p className="about-page__subtitle">
            When I’m not designing or coding, you’ll find me exploring new
            places and capturing moments through my camera lens. Traveling fuels
            my creativity, and photography helps me see the world from unique
            perspectives.
          </p>
          <div className="about-page__gallery">
            <div className="about-page__gallery-card">
              {" "}
              <img
                src="/assets/travel_1.jpg"
                alt="Travel Photo 1"
                className="about-page__gallery-image"
              />
              <p> Batu Caves, Malaysia</p>
            </div>
            <div className="about-page__gallery-card">
              {" "}
              <img
                src="/assets/travel_5.jpg"
                alt="Travel Photo 1"
                className="about-page__gallery-image"
              />
              <p> Vancouver, Canada</p>
            </div>
            <div className="about-page__gallery-card">
              {" "}
              <img
                src="/assets/travel_3.jpg"
                alt="Travel Photo 1"
                className="about-page__gallery-image"
              />
              <p> Chennai, India</p>
            </div>
            <div className="about-page__gallery-card">
              {" "}
              <img
                src="/assets/travel_4.jpg"
                alt="Travel Photo 1"
                className="about-page__gallery-image"
              />
              <p> Toronto, Canada</p>
            </div>
            <div className="about-page__gallery-card">
              {" "}
              <img
                src="/assets/travel_2.jpg"
                alt="Travel Photo 1"
                className="about-page__gallery-image"
              />
              <p> Montreal, Canada</p>
            </div>
          </div>
        </div>

        <div className="about-page__subsection">
          <h2 className="about-page__heading">Let’s Connect!</h2>
          <p className="about-page__subtitle">
            Feel free to reach out if you’d like to collaborate or just chat
            about design, development, or travel! You can find me on:
          </p>
          <ul className="about-page__social-links">
            <li>
              <a
                href="https://github.com/ashuiux"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aswiniviswanath"
                target="_blank"
                rel="noopener noreferrer" >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/aswini"
                target="_blank"
                rel="noopener noreferrer">
                Behance
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
