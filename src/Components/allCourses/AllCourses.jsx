import "../Courses/Courses.css";
import React, { useState, useEffect } from "react";


function Courses() {
  const [courses, setCourses] = useState([]);

useEffect(() => {
  fetch('https://familyuz.herokuapp.com/api/v1/courseData')
  .then(res => res.json())
  .then(res => setCourses(res.data))
}, [courses]);

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
          {courses && courses.map(e => {
              return (
                <li key={e.course_id} id={e.course_id} className="card">
                  <div className="img-wrapper">
                    <span className="card__btn">{e.teacher_name}</span>
                    <img src={e.course_img} alt={e.teacher_name} className="card__img" />
                  </div>
                  <h3 className="card__title">{e.course_title}</h3>
                  <p className="card__description">{e.course_info}</p>
                  <a href="/" className="card__link">
                    Batafsil
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Courses;

