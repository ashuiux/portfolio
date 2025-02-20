import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import "./ProjectPage.scss";
import arrowdownward from "../../../public/assets/arrow_downward.svg";
import arrow from "../../../public/assets/arrow_outward.svg";

const projectsData = {
  1: {
    title: "Empowering working individuals with accessible information",
    role: "User Experience Designer, User Experience Researcher, Product Manager",

    problem_users: {
      problem:
        "Many individuals who work in public locations around Vancouver struggle to find spaces with charging ports, leading to wasted time and reduced productivity.",
    },

    ux_design: {
      vision:
        "Create a seamless and user-friendly web application to help users find nearby charging outlets with ease.",
      mvp: {
        proposed_solution:
          "A web application where people can search for available public charging outlets efficiently.",
        viability:
          "Provides previously inaccessible information, improving productivity and convenience.",
        minimal_approach:
          "Focuses on one core service—finding charging outlets—without unnecessary features.",
      },
      survey_results: {
        point1: ["85%", "Having difficulties finding charging outlets."],
        point2: ["90%", "Need to charge their devices at least once"],
        point3: [
          "75%",
          "People go home/switch locations because of the inconvenience.",
        ],
      },
      users: {
        personas: ["persona-1.png", "persona-2.png"],
        user_stories: "user-stories.png",
      },
      flow: "Developed intuitive navigation and user flows for quick access to relevant charging locations.",
      prototype:
        "Created wireframes and interactive prototypes, tested through usability sessions for refinement.",
    },

    impact_growth: {
      go_to_market_strategy: {
        positioning: "positioning.png",
        metrics: "metrics.png",
      },
      value:
        "Eliminates frustration by providing real-time charging spot availability in one platform.",
    },

    tech_execution: {
      stack: ["Figma", "FigJam", "Google Forms"],
      ux_quality:
        "Prioritized accessibility, mobile responsiveness, and an intuitive UI.",
    },

    image: [
      "plugin-mockup.jpg",
      "plugin-wireframe.jpg",
      "plugin-mockups.jpg",
      "uvp.png",
      "mvp.png",
    ],
  },
};

function ProjectPage() {
  const { id } = useParams();
  const project = projectsData[Number(id)]; // Convert id to number

  if (!project) return <div>Project not found</div>;

  const mvpRef = useRef(null);
  const uvpRef = useRef(null);
  const gtmRef = useRef(null);
  const wnmRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="project-page">
      <div className="project-page-header ">
        <div className="project-page-header-content">
          <h3 className="project-page-heading">
            {" "}
            {project.problem_users.problem}
          </h3>
          <p className="project-page-description"> Problem Statement</p>
        </div>

        <div className="project-page-header-content">
          <h3 className="project-page-heading">
            {" "}
            {project.ux_design.mvp.proposed_solution}
          </h3>{" "}
          <p className="project-page-description"> Proposed Solution</p>
        </div>
      </div>

      <img
        src={`/assets/${project.image[0]}`}
        alt="mockup"
        className="project-page__mainimage"
      />

      <div className="project-page-section project-page-useresearch">
        <div className="project-page-text project-page-researchtext">
          <h3 className="project-page-subheading">User Research</h3>
          <p className="project-page-description">
            {" "}
            Conducted a user survey by distributing questionnaires to the target
            audience. The collected responses provide valuable insights into
            user preferences, behaviors, and pain points. Below are the key
            findings from the survey results.
          </p>
        </div>
        <ul className="project-page-survey">
          <li>
            {" "}
            <strong>{project.ux_design.survey_results.point1[0]}</strong>
            {project.ux_design.survey_results.point1[1]}
          </li>
          <li>
            {" "}
            <strong>{project.ux_design.survey_results.point2[0]}</strong>
            {project.ux_design.survey_results.point2[1]}
          </li>
          <li>
            {" "}
            <strong>{project.ux_design.survey_results.point3[0]}</strong>
            {project.ux_design.survey_results.point3[1]}
          </li>
        </ul>
    
        <div className="project-page-text">
          <p className="project-page-description">
            {" "}
            Synthesized the survey data to create detailed user personas,
            representing distinct user groups based on demographics, behaviors,
            goals, and pain points. By analyzing patterns in responses, I
            identified common user needs, motivations, and challenges. These
            personas serve as a foundational tool in the user-centered design
            process, ensuring that design decisions align with real user
            expectations and enhance overall usability and engagement.
          </p>
        </div>
        <div className="project-page__personas">
          <img
            src={`/assets/${project.ux_design.users.personas[0]}`}
            alt="Persona 1"
            className="project-page__persona"
          />
          <img
            src={`/assets/${project.ux_design.users.personas[1]}`}
            alt="Persona 2"
            className="project-page__persona"
          />
        </div>
      </div>

      <div className="project-page-section project-page-userstory flex-row">
        <div className="project-page-text">
          <h3 className="project-page-subheading flex-heading">User Stories</h3>
          <p className="project-page-description">
            {" "}
            Developed user stories based on the insights gathered from user
            research to define key interactions and user needs within the
            product.
          </p>
          <a
            className="project-page__link"
            href="https://www.figma.com/board/8uHKs4HQhZqqro8HuyKVtx/User-stories?node-id=0-1&t=9DeDCK1I3eC099xY-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
            <img className="project-page__link-arrow" src={arrow} alt="arrow" />
          </a>
        </div>
        <div className="project-page-subsection">
          <img
            src={`/assets/${project.ux_design.users.user_stories}`}
            alt="User Stories"
            className="project-page__image no-border"
          />
        </div>
      </div>


      <div className="project-page-strategy">
        <div className="project-page-strategy-description project-page-strategy-sticky-header">
          <h3 className="project-page-subheading " id="strategy-overview">
            Project Strategy & Design Overview{" "}
          </h3>

          <div className="project-nav">
            <Link
              className="project-nav-link"
              to="#mvp"
              onClick={() => scrollToSection(mvpRef)}
            >
              MVP
              <img
                src={arrowdownward}
                alt="Arrow Down"
                className=".material-symbols-outlined"
              />
            </Link>
            <Link
              className="project-nav-link"
              to="#uvp"
              onClick={() => scrollToSection(uvpRef)}
            >
              Unique Value Proposition
              <img
                src={arrowdownward}
                alt="Arrow Down"
                className=".material-symbols-outlined"
              />
            </Link>

            <Link
              className="project-nav-link"
              to="#gtm"
              onClick={() => scrollToSection(gtmRef)}
            >
              Go To Market Strategy
              <img
                src={arrowdownward}
                alt="Arrow Down"
                className=".material-symbols-outlined"
              />
            </Link>
            <Link
              className="project-nav-link"
              to="#wnm"
              onClick={() => scrollToSection(wnmRef)}
            >
              Wireframes & Mockups
              <img
                src={arrowdownward}
                alt="Arrow Down"
                className=".material-symbols-outlined"
              />
            </Link>
          </div>
        </div>
        <div className="project-page-strategy-content">
          <div className="project-page-section" ref={mvpRef} id="mvp">
            <div className="project-page-text">
              <h3 className="project-page-subheading flex-heading">MVP</h3>
            </div>
            <div className="project-section__container">
              <div className="project-section__block">
                <h4 className="project-section__heading">
                  Proposed_solution (p)
                </h4>
                <p className="project-section__description">
                  A web application where people can search for available public
                  charging outlets efficiently.
                </p>
              </div>
              <div className="project-section__block">
                <h4 className="project-section__heading">Viability (v)</h4>
                <p className="project-section__description">
                  Provides previously inaccessible information, improving
                  productivity and convenience.
                </p>
              </div>
              <div className="project-section__block">
                <h4 className="project-section__heading">Minimal_approach (m)</h4>
                <p className="project-section__description">
                  Focuses on one core service—finding charging outlets—without
                  unnecessary features.
                </p>
              </div>
            </div>
          </div>

          <div className="project-page-section" ref={uvpRef} id="uvp">
            <div className="project-page-text">
              <h3 className="project-page-subheading flex-heading">
                Unique Value Proposition
              </h3>
            </div>
            <div className="project-page-subection">
              <img
                src={`/assets/uvp.png`}
                alt="Unique Value Proposition"
                className="project-page__image"
              />
            </div>
          </div>

          <div className="project-page-section" ref={gtmRef} id="go-to-market">
            <div className="project-page-subsection">
              <h3 className="project-page-subheading flex-heading">
                Go To Market Strategy
              </h3>

              <div className="project-page-subsection project-page-product">
                <h3 className="project-page-subtitle project-page-subtitle-strategy">
                  Product Positioning
                </h3>
             
              <img
                src={`/assets/${project.impact_growth.go_to_market_strategy.positioning}`}
                alt="Positioning"
                className="project-page__image"
              />
              <h3 className="project-page-subtitle">Measuring Metrics</h3>
              <img
                src={`/assets/${project.impact_growth.go_to_market_strategy.metrics}`}
                alt="Metrics"
                className="project-page__image"
              />
               </div>
            </div>
          </div>

          <div className="project-page-section project-page-wireframe" ref={wnmRef} id="wireframes">
            <div className="project-page-text">
              <h3 className="project-page-subtitle">Wireframes & Mockups</h3>
            </div>
            <img
              src={`/assets/${project.image[1]}`}
              alt="Wireframe"
              className="project-page__image border-radius"
            />
            <div className="project-page-text"></div>
            <img
              src={`/assets/${project.image[2]}`}
              alt="Mockup"
              className="project-page__image  border-radius"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
