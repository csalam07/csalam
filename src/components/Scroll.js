import React, { useEffect, useState } from "react";
import "../styles/Scroll.css";
import { RiRocketLine } from "react-icons/ri";

function Scroll() {
  const [scrollUp, setScrollUp] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 560) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const scrollTop = (e, id) => {
    e && e.preventDefault();
    const elementToView = document.getElementById(id);
    elementToView.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <a
      href="#home"
      onClick={(e) => scrollTop(e, "home")}
      className={`scrollup ${scrollUp && "show-scroll"}`}
      id="scroll-up"
    >
      <i className="scrollup__icon">
        <RiRocketLine />
      </i>
    </a>
  );
}

export default Scroll;
