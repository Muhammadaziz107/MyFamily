import "./home.css";

import Header from "../../Components/header/header";
import Intro from "../../Components/intro/intro";
import Sura from "../../Components/sura/sura";
import JeromeBell from "../../Components/JeromeBell/JeromeBell";
import Footer from "../../Components/footer/footer";
import Courses from '../../Components/Courses/Courses'
import Blogs from '../../Components/Blogs/Blogs'


function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Sura />
<Courses />
      <Blogs />
      <JeromeBell />
      <Footer />
    </div>
  );
}

export default Home;
