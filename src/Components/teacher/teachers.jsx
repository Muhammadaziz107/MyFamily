import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import teacher from "../../Assets/Images/teacher.jpg";
import arrows from "../../Assets/Images/arrov.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./teachers.css";
function Teachers() {

  const [teachers, setTeachers] = useState([]);


fetch('https://familyuz.herokuapp.com/api/v1/teachers')
.then(res => res.json())
.then(res => setTeachers(res.data))
  return (
    <div className="teachers">
      <div className="container">
        <Swiper
          slidesPerView={"1"}
          spaceBetween={30}
          navigation={
            (true,
            {
              prevEl: ".teachers__prev",
              nextEl: ".teachers__next",
            })
          }
          modules={[Navigation]}
          className="mySwiper"
          clickable={"true"}
        >
         
         {teachers && teachers.map(e => (
            <SwiperSlide key={e.teacher_id}>
            <div className="swiper__wrapper" id={e.teacher_id}>
              <img
                className="slider__img"
                src={e.teacher_img}
                alt="teacher img"
                width="400"
                height="400"
              />

              <div className="slider__info">
                <span className="slider__line"></span>
                <h3 className="slider__heading">{e.teacher_name}</h3>
                <p className="slider__text">
                  {e.teacher_info}
                </p>
                <p className="slider__teacher-name">
                  {" "}
                  "Sakinat" oila maktabini o'qituvchisi
                </p>
                <span className="slider__line"></span>
              </div>
            </div>
          </SwiperSlide>
         ))}

        
        </Swiper>

        <div className="teachers__btnControllers">
          <button className="teachers__btnControllers__prev teachers__prev">
            <img src={arrows} alt="arrow img" width="35" height="35" />
          </button>
          <button className="teachers__btnControllers__next teachers__next">
            <img src={arrows} alt="arrow img" width="35" height="35" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Teachers;
