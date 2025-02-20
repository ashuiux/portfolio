import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../../public/assets/arrow_outward.svg";

import "./CardGrid.scss";

const projects = [
  {
    id: 1,
    name: "Product Desogn: Empowering Working Individuals with Accessible Information",
    path: "/project/1",
    image: "plugin-mockup.jpg",
    role: "User experience designer, Product manager",
    proposed_solution:
      "Designed a Web App Product Model for Efficient Public Charging Outlet Search",
  },
  {
    id: 2,
    name: "Product Desogn: Empowering Working Individuals with Accessible Information",
    path: "https://www.behance.net/gallery/203337045/Mojito-Branding-experience",
    image: "mojito.gif",
    role: "Graphic Designer, Brand Designer",
    proposed_solution:
      "Branding & Graphic Design: Developing a Visual Identity and Engaging Collateral ",
  },
];

function CardGrid() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, visible: false });

  const moveCursor = (event) => {
    setCursorPos({ x: event.clientX, y: event.clientY, visible: true });
  };

  const hideCursor = () => {
    setCursorPos({ ...cursorPos, visible: false });
  };

  return (
    <section
      className="cardgrid"
      onMouseMove={moveCursor}
      onMouseLeave={hideCursor}
    >
      <h2 className="cardgrid__title"> Highlighted Works</h2>
      <div className="cardgrid__list">
        {projects.map((project) => (
          <div key={project.id} className="cardgrid__item">
            <div className="cardgrid__card">
              <div className="cardgrid__card-desc">
                <div className="cardgrid__header ">
                  <div className="cardgrid__header-content">
                    <h3 className="cardgrid__heading">
                      {project.proposed_solution}
                    </h3>
                    <p className="cardgrid__description">Product</p>
                  </div>
                  <div className="cardgrid__header-content">
                    <h3 className="cardgrid__heading">{project.role}</h3>
                    <p className="cardgrid__description">Role</p>
                  </div>
                </div>
              </div>

              <Link to={project.path} className="cardgrid__link">
                {" "}
                Read More
                <img className="cardgrid__link-arrow" src={arrow} alt="arrow" />
              </Link>
            </div>
            <img
              src={`/assets/${project.image}`}
              alt={project.name}
              className="cardgrid__image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardGrid;
