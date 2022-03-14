import "./style.css";
import introImg from "../../../Assets/Images/about-intro.jpg";

function AboutIntro() {
  return (
    <>
      <div className="about_intro">s
        <div className="about_intro-content container">
          <div className="intro_info">
            <h2 className="intro_title">
              MYFAMILY <br /> OILA MAKTABI HAQIDA MA'LUMOT
            </h2>
            <p className="intro_text">
              Perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium
            </p>
          </div>
        </div>
        <img className="intro_image" src={introImg} alt="" />
      </div>
    </>
  );
}

export default AboutIntro;
