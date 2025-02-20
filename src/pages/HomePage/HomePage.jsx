import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import arrow from "../../../public/assets/arrow_outward.svg";
import CardGrid from "../../components/CardGrid/CardGrid";
import EmailCopy from "../../components/EmailCopy/EmailCopy";
import Testimonials from "../../components/Testimonials/Testimonials";

function HomePage() {
  return (
    <div className="homepage">
      <section className="homepage__hero">
      <p className="homepage__subtitle">
        Hi, I'm  Aswini (Ash)
        </p>
        <h1 className="homepage__title homepage__title--design">
          UI/UX Designer
        </h1>
        <h1 className="homepage__title homepage__title--dev">Developer</h1>
        <p className="homepage__subtitle">
          Crafting intuitive digital experiences for 7+ years
        </p>
      </section>

      <section className="homepage__external-links">
        <div className="homepage__link">
          <Link
            to="https://www.linkedin.com/in/aswiniviswanath/"
            className="homepage__link homepage__link--linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <img className="homepage__link-arrow" src={arrow} alt="arrow" />
          </Link>
        </div>
        <div className="homepage__link">
          <Link
            to="https://github.com/ashuiux"
            className="homepage__link homepage__link--github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <img className="homepage__link-arrow" src={arrow} alt="arrow" />
          </Link>
        </div>
        <div className="homepage__link">
          {" "}
          <EmailCopy />{" "}
        </div>
      </section>

      <CardGrid />
      <Testimonials />
    </div>
  );
}

export default HomePage;
