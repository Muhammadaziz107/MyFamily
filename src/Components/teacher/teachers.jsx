import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import teacher from "../../Assets/Images/teacher.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./teachers.css";
function Teachers() {
  return (
    <div className="teachers">
      <div className="container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="slider__img"
              src={teacher}
              alt="teacher img"
              width="400"
              height="400"
            />

            <div className="slider__info">
              <span className="slider__line"></span>
              <h3>Ikrom Sharif</h3>
              <p>
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC, making it over
                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the cites of
                the word in classical literature"
              </p>
              <p>"Sakinat" oila maktabini o'qituvchisi</p>
              <span className="slider__line"></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slider__img"
              src={teacher}
              alt="teacher img"
              width="400"
              height="400"
            />

            <div className="slider__info">
              <span className="slider__line"></span>
              <h3>Ikrom Sharif</h3>
              <p>
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC, making it over
                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                College in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the cites of
                the word in classical literature"
              </p>
              <p>"Sakinat" oila maktabini o'qituvchisi</p>
              <span className="slider__line"></span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Teachers;
