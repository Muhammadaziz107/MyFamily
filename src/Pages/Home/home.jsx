import "./home.css";

import Header from "../../Components/header/header";
import Intro from "../../Components/intro/intro";
import Sura from "../../Components/sura/sura";
import JeromeBell from "../../Components/JeromeBell/JeromeBell";

function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Sura />
      <JeromeBell />
    </div>
  );
}

export default Home;
