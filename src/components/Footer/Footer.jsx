import React from 'react';
import { Link } from "react-router-dom";
import arrow from "../../../public/assets/arrow_outward-white.svg";
import EmailCopy from "../../components/EmailCopy/EmailCopy";
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__external-links">
          <div className="footer__link">
            <Link
              to="https://www.linkedin.com/in/aswiniviswanath/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <img className="footer__link-arrow" src={arrow} alt="arrow" />
            </Link>
          </div>
          <div className="footer__link">
            <Link
              to="https://github.com/ashuiux"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <img className="footer__link-arrow" src={arrow} alt="arrow" />
            </Link>
          </div>
          {/* <div className="footer__link">
            < EmailCopy />
          </div> */}
        </section>
        <p className="footer__additional-text">
          Designing with purpose, building with passion. Let’s create something meaningful.
        </p>
        <p className="footer__copyright">&copy; 2025 Aswini Viswanath. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;