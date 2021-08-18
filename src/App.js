import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";
import "./styles/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: "animated",
});

function App() {
  const [resumeData, setresumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((response) => response.json())
      .then((data) => setresumeData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header data={resumeData.logo} />
      <main>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <Home data={resumeData.home} />
        </div>

        <About data={resumeData.about} />

        <Skills data={resumeData.skills} />

        <Qualification data={resumeData.qualification} />

        <Services data={resumeData.services} />

        <Portfolio data={resumeData.portfolio} />

        <Contact data={resumeData.contact} />
      </main>

      <Footer />

      <Scroll />
    </>
  );
}

export default App;
