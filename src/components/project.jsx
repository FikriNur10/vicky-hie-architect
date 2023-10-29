import ".././App.css";
import React, { useEffect } from "react";
import modernCover from ".././assets/modern_minimalis/work1.jpg";
import equiversaCover from ".././assets/equiversa_office/work5.jpg";
import tujuCover from ".././assets/paralel_urban/work4.png";
import {useNavigate} from 'react-router-dom'
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Project() {
  useEffect(() => {
    const portfolioSection = document.querySelector("#portfolio");

    const fadeInPortfolio = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          portfolioSection.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const optionsPortfolio = {
      threshold: 0.5,
      once: true,
    };

    const observerPortfolio = new IntersectionObserver(fadeInPortfolio, optionsPortfolio);
    observerPortfolio.observe(portfolioSection);
  }, []);

  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={modernCover} alt="" />
            <div className="layer">
              <div id="wrapper-decs" className="center-content">
                <h3>Modern Minimalis Interior</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sit vitae nam labore eligendi obcaecati?</p>
                <a href="/modernminimalis" id="btn-project" className="center-content">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
                </a>
              </div>
            </div>
          </div>
          <div className="work">
            <img src={equiversaCover} alt="" />
            <div className="layer">
              <div id="wrapper-decs" className="center-content">
                <h3>Equiversa Office</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sit vitae nam labore eligendi obcaecati?</p>
                <a href="/equiversaoffice" id="btn-project" className="center-content">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
                </a>
              </div>
            </div>
          </div>
          <div className="work">
            <img src={tujuCover} alt="" />
            <div className="layer">
              <div id="wrapper-decs" className="center-content">
                <h3>Paralel Urban Farm</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sit vitae nam labore eligendi obcaecati?</p>
                <a href="/paralelurbanfarm" id="btn-project" className="center-content">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="#portfolio" className="btn">
          See More
        </a>
      </div>
    </div>
  );
}
export default Project;
