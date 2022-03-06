import React, { useState, useEffect } from "react";
import "./Courses.css";
import { courses } from "../data";
import { NavLink } from "react-router-dom";

let s = courses.slice(0, 4);
s.reverse();

function Courses() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await fetch("https://familyuz.herokuapp.com/api/v1/courseData", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200) {
      const request = await res.json();
      setData(request);
    }
  }, []);

  useEffect(() => {}, [data]);
  return (
    <>
      <section className="courses">
        <div className="container">
          <h2 className="courses__title">Bizning kurslar</h2>
          <p className="courses__subtitle">
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium
          </p>

          <ul className="card-wrapper">
            {s.map(e => {
              return (
                <li key={e.id} className="card">
                  <div className="img-wrapper">
                    <span className="card__btn">{e.author}</span>
                    <img src={e.image} alt="e" className="card__img" />
                  </div>
                  <h3 className="card__title">{e.title}</h3>
                  <p className="card__description">{e.subtitle}</p>
                  <a href="/" className="card__link">
                    Batafsil
                  </a>
                </li>
              );
            })}
          </ul>
          <NavLink to="/about" href="#all-courses-id" className="courses__btn">
            Barcha kurslar
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Courses;
