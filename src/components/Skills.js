import React, { useState } from "react";
import "../styles/Skills.css";
import {
  BiChevronsDown,
  BiCodeCurly,
  BiData,
  BiMobileAlt,
} from "react-icons/bi";
import { HiColorSwatch } from "react-icons/hi";

const SkillData = ({ skillName, skillNum, skillsName }) => {
  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">{skillName}</h3>
        <span className="skills__number">{skillNum}%</span>
      </div>
      <div className="skills__bar">
        <span className={`skills__percentage ${skillsName}`}></span>
      </div>
    </div>
  );
};

const Skill = ({
  title,
  subtitle,
  skillName1,
  skillNum1,
  skillName2,
  skillNum2,
  skillName3,
  skillNum3,
  skillName4,
  skillName5,
  skillNum4,
  skillNum5,
  skillsName1,
  skillsName2,
  skillsName3,
  skillsName4,
  skillsName5,
  icon,
}) => {
  return (
    <div>
      <div className="skills__header">
        <i className="skills__icon">
          {icon === "curly" ? <BiCodeCurly /> : ""}
          {icon === "db" ? <BiData /> : ""}
          {icon === "design" ? <HiColorSwatch /> : ""}
          {icon === "mobile" ? <BiMobileAlt /> : ""}
        </i>

        <div>
          <h1 className="skills__title">{title}</h1>
          <span className="skills__subtitle">More then {subtitle} years</span>
        </div>
        <i className="skills__arrow">
          <BiChevronsDown />
        </i>
      </div>
      <div className="skills__list grid">
        <SkillData
          skillName={skillName1}
          skillNum={skillNum1}
          skillsName={skillsName1}
        />

        <SkillData
          skillName={skillName2}
          skillNum={skillNum2}
          skillsName={skillsName2}
        />

        <SkillData
          skillName={skillName3}
          skillNum={skillNum3}
          skillsName={skillsName3}
        />

        <SkillData
          skillName={skillName4}
          skillNum={skillNum4}
          skillsName={skillsName4}
        />

        <SkillData
          skillName={skillName5}
          skillNum={skillNum5}
          skillsName={skillsName5}
        />
      </div>
    </div>
  );
};

function Skills({ data }) {
  if (data) {
    var skills1 = data.skills1;
    var skills2 = data.skills2;
    var skills4 = data.skills4;

    var role1 = skills1.role;
    var role2 = skills2.role;
    var role4 = skills4.role;

    var experience1 = skills1.experience;
    var experience2 = skills2.experience;
    var experience4 = skills4.experience;
  }

  const [showSkill, setShowSkill] = useState(1);

  const toggleSkill = (index) => {
    if (showSkill === index) {
      setShowSkill(0);
    } else setShowSkill(index);
  };
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My testimonial level</span>

      <div className="skills__container container grid">
        <div>
          {/* skills 1 */}
          <div
            className={`skills__content ${
              showSkill === 1 ? "skills__open" : "skills__close"
            }`}
            onClick={() => toggleSkill(1)}
          >
            <Skill
              title={role1}
              subtitle={experience1}
              skillName1="HTML"
              skillNum1="90"
              skillName2="CSS"
              skillNum2="80"
              skillName3="JavaScript"
              skillNum3="95"
              skillName4="React"
              skillNum4="99"
              skillName5="Nextjs"
              skillNum5="90"
              skillsName1="skills__html"
              skillsName2="skills__css"
              skillsName3="skills__js"
              skillsName4="skills__react"
              skillsName5="skills__html"
              icon="curly"
              index={1}
            />
          </div>

          {/* skills 2 */}
          <div
            className={`skills__content ${
              showSkill === 2 ? "skills__open" : "skills__close"
            }`}
            onClick={() => toggleSkill(2)}
          >
            <Skill
              icon="db"
              title={role2}
              subtitle={experience2}
              skillName1="Java"
              skillNum1="80"
              skillName2="Node js"
              skillNum2="85"
              skillName5="Express"
              skillNum5="95"
              skillName3="Python"
              skillNum3="90"
              skillName4="Firebase"
              skillNum4="95"
              skillsName1="skills__php"
              skillsName2="skills__node"
              skillsName3="skills__node"
              skillsName4="skills__firebase"
              skillsName5="skills__node"
            />
          </div>
        </div>
        <div>
          {/* Skills 3 */}
          <div
            className={`skills__content ${
              showSkill === 3 ? "skills__open" : "skills__close"
            }`}
            onClick={() => toggleSkill(3)}
          >
            <Skill
              icon="mobile"
              title={role4}
              subtitle={experience4}
              skillName1="Java"
              skillNum1="90"
              skillName2="Kotline"
              skillNum2="85"
              skillName3="Flutter"
              skillNum3="83"
              skillName4="React Native"
              skillNum4="70"
              skillName5="C/C++"
              skillNum5="70"
              skillsName1="skills__figma"
              skillsName2="skills__sketch"
              skillsName3="skills__photoshop"
              skillsName4="skills__figma"
              skillsName5="skills__figma"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
