import "./home.css";

//components
import Header from "../../Components/header/header";
import Intro from "../../Components/intro/intro";
import Sura from "../../Components/sura/sura";
import JeromeBell from "../../Components/JeromeBell/JeromeBell";
import Footer from "../../Components/footer/footer";
import WhyChoise from "../../Components/whyChoise/whyChoise";
import Teachers from "../../Components/teacher/teachers";

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Intro />
        <Sura />
        <WhyChoise />
        <Teachers />
        <JeromeBell />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
