import "./style.css";

//components
import Header from "../../Components/header/header";
import AboutIntro from "../../Components/about-us/intro/intro";
import SchoolAim from "../../Components/about-us/school-aim/school-aim";
import Courses from "../../Components/allCourses/AllCourses";
import Author from "../../Components/about-us/author/author";
import ContactForm from "../../Components/contactForm/contactForm";
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
          <div className="contact-form-component">
            <ContactForm />
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default About;
