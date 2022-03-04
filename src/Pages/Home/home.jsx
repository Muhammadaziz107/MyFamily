import React from "react";
import "./home.css";

//components
import Header from "../../Components/header/header";
import Intro from "../../Components/intro/intro";
import Sura from "../../Components/sura/sura";
import JeromeBell from "../../Components/JeromeBell/JeromeBell";
import Footer from "../../Components/footer/footer";
import WhyChoise from "../../Components/whyChoise/whyChoise";
import Courses from "../../Components/Courses/Courses";
import Blogs from "../../Components/Blogs/Blogs";
import Teachers from "../../Components/teacher/teachers";
import ContactForm from "../../Components/contactForm/contactForm";

function Home() {
  return (
    <div className="home-page">
      <header>
        <Header />
      </header>
      <section>
        <Intro />
        <Sura />
        <WhyChoise />
        <Courses />
        <Blogs />
        <Teachers />
        <JeromeBell />
        <div className="contact-form-component">
          <ContactForm />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
