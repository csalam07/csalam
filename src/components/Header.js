import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import {
  AiOutlineFileText,
  AiOutlinePicture,
  AiOutlineMessage,
  AiOutlineClose,
  AiOutlineAppstore,
} from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { BiBriefcase, BiMoon } from "react-icons/bi";
import { SiSkillshare } from "react-icons/si";

function Header({ data }) {
  const sections = document.querySelectorAll("section[id]");

  const darkTheme = "dark-theme";
  const [iconTheme, setIconTheme] = useState(true);
  const selectedTheme = localStorage.getItem("selected-theme");
  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme,
    );
  }
  const handleThemeChange = () => {
    document.body.classList.toggle(darkTheme);
    setIconTheme(!iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
  };

  const [showMenu, setShowMenu] = useState(false);
  const navToggle = () => setShowMenu(!showMenu);
  const [scrollHeader, setScrollHeader] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const changeNavbar = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });

    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  });

  const handleAction = (e, index, id) => {
    e && e.preventDefault();
    const elementToView = document.getElementById(id);
    elementToView.scrollIntoView({
      behavior: "smooth",
    });
    setActiveTab(index);
  };

  return (
    <header className={`header ${scrollHeader && "scroll-header"}`} id="header">
      <nav className="nav container">
        <a
          href="/"
          className="nav__logo"
          onClick={(e) => handleAction(e, 0, "home")}
        >
          {data}
        </a>

        <div className={`nav__menu ${showMenu && "show-menu"}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${activeTab === 1 && "active-link"}`}
                onClick={(e) => handleAction(e, 1, "home")}
              >
                <i className="nav__icon">
                  <GoHome />
                </i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a
                onClick={(e) => handleAction(e, 2, "about")}
                href="#about"
                className={`nav__link ${activeTab === 2 && "active-link"}`}
              >
                <i className="nav__icon">
                  <AiOutlineFileText />
                </i>{" "}
                About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${activeTab === 3 && "active-link"}`}
                onClick={(e) => handleAction(e, 3, "skills")}
              >
                <i className="nav__icon">
                  <SiSkillshare />
                </i>{" "}
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                className={`nav__link ${activeTab === 4 && "active-link"}`}
                onClick={(e) => handleAction(e, 4, "services")}
              >
                <i className="nav__icon">
                  <BiBriefcase />
                </i>{" "}
                Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                className={`nav__link ${activeTab === 5 && "active-link"}`}
                onClick={(e) => handleAction(e, 5, "portfolio")}
              >
                <i className="nav__icon">
                  <AiOutlinePicture />
                </i>{" "}
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${activeTab === 6 && "active-link"}`}
                onClick={(e) => handleAction(e, 6, "contact")}
              >
                <i className="nav__icon">
                  <AiOutlineMessage />
                </i>
                Contactme
              </a>
            </li>
          </ul>

          <i className="nav__close" id="nav-close" onClick={navToggle}>
            <AiOutlineClose />
          </i>
        </div>
        <div className="nav__btns">
          <i
            className="change-theme"
            id="theme-button"
            onClick={handleThemeChange}
          >
            {iconTheme ? <BiMoon /> : <FiSun />}
          </i>

          <div className="nav__toggle" id="nav-toggle" onClick={navToggle}>
            <i className="nav__icon">
              <AiOutlineAppstore />
            </i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
