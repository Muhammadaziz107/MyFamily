import "./style.css";
import { useRef } from "react";

// Images
import authorImgJpg from "../../../Assets/Images/muallif.jpg";

function Author() {
  const authorVideo = useRef();
  const authorVideoLink = `<iframe className='video__video' width="1220" height="550" src="https://www.youtube.com/embed/55AgHz-GTLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />`;

  return (
    <>
      <section className="about-author">
        <div className="author container">
          <h2 className="about-author__title">MUALLIF HAQIDA</h2>
          <p className="about-author__description">
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium{" "}
          </p>

          <div ref={authorVideo} className="about-author__video">
            <img
              className="video__img"
              src={authorImgJpg}
              alt="video imggg"
              onClick={e => {
                authorVideo.current.innerHTML = authorVideoLink;
              }}
            />

            <button
              className="video__btn"
              onClick={e => {
                authorVideo.current.innerHTML = authorVideoLink;
              }}
            >
              Tomosha qilish
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Author;
