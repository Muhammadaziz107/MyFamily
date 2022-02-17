import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import teacher from "../../Assets/Images/teacher.jpg";
import arrows from "../../Assets/Images/arrov.svg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./teachers.css";
function Teachers() {
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
          <SwiperSlide>
            <div className="swiper__wrapper">
              <img
                className="slider__img"
                src={teacher}
                alt="teacher img"
                width="400"
                height="400"
              />

              <div className="slider__info">
                <span className="slider__line"></span>
                <h3 className="slider__heading">Ikrom Sharif</h3>
                <p className="slider__text">
                  "Contrary to popular belief, Lorem Ipsum is not simply random text. It
                  has roots in a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more obscure
                  Latin words, consectetur, from a Lorem Ipsum passage, and going through
                  the cites of the word in classical literature"
                </p>
                <p className="slider__teacher-name">
                  {" "}
                  "Sakinat" oila maktabini o'qituvchisi
                </p>
                <span className="slider__line"></span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper__wrapper">
              <img
                className="slider__img"
                src={teacher}
                alt="teacher img"
                width="400"
                height="400"
              />

              <div className="slider__info">
                <span className="slider__line"></span>
                <h3 className="slider__heading">Ikrom Sharif</h3>
                <p className="slider__text">
                  "Contrary to popular belief, Lorem Ipsum is not simply random text. It
                  has roots in a piece of classical Latin literature from 45 BC, making it
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more obscure
                  Latin words, consectetur, from a Lorem Ipsum passage, and going through
                  the cites of the word in classical literature"
                </p>
                <p className="slider__teacher-name">
                  {" "}
                  "Sakinat" oila maktabini o'qituvchisi
                </p>
                <span className="slider__line"></span>
              </div>
            </div>
          </SwiperSlide>
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
