import React from "react";
import "./home.css";
import mypic from "./mypic.png";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import "./animations.css";

export default function Home() {
  return (
    <>
      <div>
        <div className="home-container">
          <div className="home-left-container"></div>
          <div className="home-right-container"></div>
        </div>
        <div className="home-front">
          <div className="user-card">
            <img
              src={mypic}
              alt="profile"
              className="profile-img"
              draggable="false"
            />
            <span className="myname">Ravikant </span>
            <span className="myname">Singh </span>
            <span className="rectangle"></span>
            <span className="developer">developer</span>
            <div className="social-handle">
              <a
                href="https://www.linkedin.com/in/ravikant-singh-712395158?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="r-icon-home"
                target="blank"
                draggable="false"
              >
                <FaLinkedinIn className="react-icons-home" />
              </a>
              <a
                href="https://www.instagram.com/rajput_ravi_27?igsh=MXUyZGl2cWcwOTMyZg=="
                className="r-icon-home"
                target="blank"
                draggable="false"
              >
                <FaInstagram className="react-icons-home" />
              </a>
              <a
                href="https://x.com/Ravirajput45?t=Nz-rOu0qGaMzw8ybFu6IRA&s=09"
                className="r-icon-home"
                target="blank"
                draggable="false"
              >
                <FaXTwitter className="react-icons-home" />
              </a>
            </div>
          </div>
          <div className="user-info">
            <span className="namaste">Namaste</span>
            <span className="sub-head">I love programming...</span>
            <button
              className="btn"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1HDon4JoJGv9wGum16ZR5fbHII3zs0qcV/view?usp=drivesdk",
                  "_blank"
                );
              }}
            >
              Resume
            </button>
            <p className="para">
              I'm currently Final year student Pursuing Computer science and
              Engineering at punjab technical University. I'm a Web Developer
              and UI/UX designer. I also love competitive programming.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
