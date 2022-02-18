import "./style.css";
import Header from "../../Components/header/header";
import AboutIntro from "../../Components/about-us/intro/intro";
import SchoolAim from "../../Components/about-us/school-aim/school-aim";
import Courses from "../../Components/about-us/courses/courses";
import Author from "../../Components/about-us/author/author";
import Footer from "../../Components/footer/footer";

function About() {
  return (
    <>
      <div className="about">
        <header>
          <Header />
        </header>
        <section>
          <AboutIntro />
          <SchoolAim />
          <Courses />
          <Author />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default About;
