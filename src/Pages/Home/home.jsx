import "./home.css";

//components
import Header from "../../Components/header/header";
import Intro from "../../Components/intro/intro";
import Sura from "../../Components/sura/sura";
import JeromeBell from "../../Components/JeromeBell/JeromeBell";
import Footer from "../../Components/footer/footer";
<<<<<<< HEAD
import Courses from '../../Components/Courses/Courses'
import Blogs from '../../Components/Blogs/Blogs'

=======
import WhyChoise from "../../Components/whyChoise/whyChoise";
import Courses from "../../Components/Courses/Courses";
import Blogs from "../../Components/Blogs/Blogs";
import Teachers from "../../Components/teacher/teachers";
>>>>>>> fd188e10102537528242f73ca3359841b738b110

function Home() {
  return (
    <div>
<<<<<<< HEAD
      <Header />
      <Intro />
      <Sura />
<Courses />
      <Blogs />
      <JeromeBell />
      <Footer />
=======
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
      </section>

      <footer>
        <Footer />
      </footer>
>>>>>>> fd188e10102537528242f73ca3359841b738b110
    </div>
  );
}

export default Home;
