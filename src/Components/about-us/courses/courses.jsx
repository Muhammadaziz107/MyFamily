import "./style.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function Courses() {
  const crsItem = useRef();
  const [display, setDisplay] = useState("");

  const courses = [
    {
      id: 1,
      teacher: "Ikrom Sharif",
      title: "ER-XOTINLARGA",
      sub_title: "(BO'LAJAK VA JORIY)",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      img: "erXotinlarga",
    },
    {
      id: 2,
      teacher: "Ikrom Sharif",
      title: "FARZAND TARBIYASI",
      sub_title: "(OTA-ONALARGA)",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      img: "farzandTarbiyasi",
    },
    {
      id: 3,
      teacher: "Ikrom Sharif",
      title: "BOLALARGA",
      sub_title: "(ODOB-AXLOQ)",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      img: "bolalarga",
    },
    {
      id: 4,
      teacher: "Ikrom Sharif",
      title: "QAYNONALARGA",
      sub_title: "(ODOB-AXLOQ)",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      img: "qaynonalarga",
    },
    {
      id: 5,
      teacher: "Ikrom Sharif",
      title: "ER-XOTINLARGA",
      sub_title: "(BO'LAJAK VA JORIY)",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      img: "erXotinlarga",
    },
    {
      id: 6,
      teacher: "Ikrom Sharif",
      title: "FARZAND TARBIYASI",
      sub_title: "(OTA-ONALARGA)",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      img: "farzandTarbiyasi",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await fetch("https://familyuz.herokuapp.com/api/v1/courseData", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    if (res.status == 200) {
      const request = await res.json();
      setData(request);
    }
  }, []);

  useEffect(() => {}, [data]);

  return (
    <>
      <section className="our-courses" id="all-courses-id">
        <div className="courses container">
          <h2 className="courses__title">BIZNING KURSLAR</h2>
          <p className="courses__sub-title">
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium
          </p>

          <ul className="courses-list">
            {courses &&
              courses.map(c => (
                <li ref={crsItem} className={`courses-item ${display}`} key={c.id}>
                  <div className="courses-item__top">
                    <p className="courses-item__teacher">{c.teacher}</p>
                    <span className="courses-item__img"></span>
                  </div>
                  <div className="courses-item__info">
                    <h3 className="courses-item__title">{c.title}</h3>
                    <h3 className="courses-item__subtitle">{c.sub_title}</h3>
                    <p className="courses-item__description">{c.description}</p>
                  </div>
                  <Link
                    className="courses-item__edit"
                    to={`/course/${c.id}`}
                    onClick={e => {
                      localStorage.setItem("courseId", c.id);
                    }}
                  >
                    Batafsil
                  </Link>
                </li>
              ))}
          </ul>
          <button
            className="course-list_show-more"
            onClick={e => {
              setDisplay("display-show");
              e.target.style.display = "none";
            }}
          >
            Barcha kurslar
          </button>
        </div>
      </section>
    </>
  );
}

export default Courses;
