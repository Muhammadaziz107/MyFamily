import "./home.css";

import Header from "../../Components/header/header";
import Intro from "../../Components/intro/intro";
import Sura from "../../Components/sura/sura";
import JeromeBell from "../../Components/JeromeBell/JeromeBell";
import Footer from "../../Components/footer/footer";

function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Sura />
      <JeromeBell />
      <Footer />
    </div>
  );
}

export default Home;
