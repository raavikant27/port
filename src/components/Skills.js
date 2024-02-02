import React, { useState, useEffect } from "react";
import "./skills.css";
import leetcode from "./assets/leetcode.svg";
import GeeksforGeeks from "./assets/gfg.png";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";

import ProgrammingCard from "./ProgrammingCard";

export default function Skills() {
  // const [codeforcesData, setCodeforcesData] = useState(0);
  // const [codechefData, setCodechefData] = useState(0);
  const [leetcodeData, setLeetcodeData] = useState(0);
  const [GeeksforGeeks, setGeeksforGeeks] = useState(0);

  // printStar(codefchefData.rating);

  return (
    <>
      <div>
        <div className="skills-container">
          <div className="skills-heading">
            <span className="nav-icon"></span>
            <span className="skills">Skills</span>
          </div>
          <span className="skills-span">Tech Stack</span>
          <div className="skills-box data">
            <SiCplusplus className="react-icons" />
            <FaHtml5 className="react-icons" />
            <FaCss3Alt className="react-icons" />
            <SiJavascript className="react-icons" />
            <FaPython className="react-icons" />
            <FaReact className="react-icons" />
            <FaNodeJs className="react-icons" />
            <SiExpress className="react-icons" />
            <SiMongodb className="react-icons" />
            <BiLogoPostgresql className="react-icons" />
            <FaBootstrap className="react-icons" />
            <SiTailwindcss className="react-icons" />
            <GrMysql className="react-icons" />
            <FaFigma className="react-icons" />
            <SiAdobeillustrator className="react-icons" />
            <SiAdobephotoshop className="react-icons" />
          </div>
          <span className="skills-span">Programming</span>
          {/* <FaStar style={{ color: "blue" }} />

          <div style={{ display: "flex" }}>
            {printStar(codechefData.rating).map((e, index) => (
              <div key={index}>{e}</div>
            ))}
          </div> */}

          <div className="skills-box">
            <ProgrammingCard>
              platformName="Leetcode" platformIcon={leetcode}
              platformUsername={"sravikant302"}
              nameCurrentColor={"black"}
              nameHighestColor={"black"}
              platformLink={"https://leetcode.com/Ram_ravi27/"}
            </ProgrammingCard>
            <ProgrammingCard>
              platformName="Leetcode" platformIcon={leetcode}
              platformUsername={"sravikant302"}
              nameCurrentColor={"black"}
              nameHighestColor={"black"}
              platformLink={"https://leetcode.com/Ram_ravi27/"}
            </ProgrammingCard>
          </div>
        </div>
      </div>
    </>
  );
}
