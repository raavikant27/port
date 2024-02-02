import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div>
        <div className="about-container">
          <div className="about-heading">
            <span className="nav-icon"></span>
            <span className="about">About</span>
          </div>
          <div className="about-box">
            <span className="institute-name">Punjab technical University </span>
            <span className="study-stream">
              B.Tech in computer science Engineering
            </span>
            <span className="study-period">2020-2024</span>
            <span className="grade">7.64/10</span>
          </div>
          <div className="about-box">
            <span className="institute-name">BGN Inter College </span>
            <span className="study-stream">Class XII</span>
            <span className="study-period">2019</span>
            <span className="grade">75%</span>
          </div>
        </div>
      </div>
    </>
  );
}
