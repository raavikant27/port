import React from "react";
import "./projects.css";
import img1 from "./assets/shoping.jpg";
import img2 from "./assets/password.jpg";
import img3 from "./assets/weather.jpg";
import img4 from "./assets/keeper.jpg";
import img5 from "./assets/randgif.jpg";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <div>
        <div className="projects-container">
          <div className="projects-heading">
            <span className="nav-icon"></span>
            <span className="project">Projects</span>
          </div>
          <ProjectCard
            heading="Keeper-App"
            tech="MERN"
            imglink={img4}
            url="https://notesapp-git-main-ravikant-singhs-projects.vercel.app/"
            info="Developed website with React.js for front-end and Node.js, Express.js, MongoDB  "
          />
          <ProjectCard
            heading="Shopping card"
            tech="HTML,CSS,Tailwind CSS, Reactjs,Javascript,React,Redux, API"
            imglink={img1}
            url="https://ecomzy-eight.vercel.app/"
            info="Developed a React and Redux- based eComerse web application. 
            Implement Redux to Centralize and streamline data handling within the eCommerce application.
             Enable item Addition and deletion functionality.
            Implement pop-up notification for items changes."
          />

          <ProjectCard
            heading="Password Generator"
            tech="HTML, CSS, Javascript"
            imglink={img2}
            url="https://passwordgeneratorbyravikant.netlify.app/"
            info="Generates Strong and secure passwords with Customizable option.
            User-friendly Interface for easy operation and strong password management.
            Utilized the Yates algorithm to efficiently Shuffle Generated for added Randomness."
          />

          <ProjectCard
            heading="Weather App"
            tech="HTML, CSS, Javascript"
            imglink={img3}
            url="https://weatherapi-ravikant.netlify.app/"
            info="Provide Real-Time Weather Information for Any Location.
            Check Current Weather Conditions, Temperature ,Humidity, Wind Speed ,And More.
            Location- Fetching Feature for Quick Access To Weather Updates."
          />
          <ProjectCard
            heading="Meme Generater app"
            tech="HTML, CSS, Javascript,React"
            imglink={img5}
            url="https://random-gif-lemon.vercel.app/"
            info="it's a Dynamic and Enjoyable Application that allows you to explore a vast selection of GIFs with a simple click. I've crafted it to be user-friendly and interactive, ensuring you easily find and enjoy GIFs on Demand"
          />
        </div>
      </div>
    </>
  );
}
