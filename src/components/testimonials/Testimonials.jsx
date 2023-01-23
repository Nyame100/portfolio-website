import React from "react";
import "./testimonials.css";
import { testimonials } from "../../data";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from associates</h5>
      <h2>Testimonials</h2>
      <Swiper // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {testimonials.map((testimonial) => {
          const { id, name, comment, img } = testimonial;
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="avatar">
                <img src={img} alt="" />
              </div>
              <h5 className="name">{name}</h5>
              <small className="review">{comment}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
