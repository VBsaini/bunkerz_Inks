import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import port_image_1 from "../../assets/imgs/portfolio-image-1.jpg";
import port_image_2 from "../../assets/imgs/portfolio-image-2.jpg";
import tatoo_img from "../../assets/imgs/clem-onojeghuo-8soQzdz9XXA-unsplash.jpg";
import { useState, useEffect } from "react";
import logo from "../../assets/imgs/yellow_logo_jpg-removebg.png";
import { Navbar } from "../navbar/navbar";

import "./Home.css";
export function Home() {
  function update() {
    var counters = document.querySelectorAll(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (let i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function (start, value, id) {
      var localStart = start;
      var speed = 10;
      if (counters[id].classList.contains("big")) {
        speed = 2;
      }
      setInterval(function () {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, speed);
    };

    for (let j = 0; j < countersQuantity; j++) {
      if (counters[j].classList.contains("big")) {
        count(600, counter[j], j);
      } else {
        count(0, counter[j], j);
      }
    }
  }
  let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
  };
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        update();
        observer.unobserve(entry.target);
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  let target = document.querySelectorAll(".count");
  target.forEach((ele) => {
    observer.observe(ele);
  });

  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="logo_header_div">
          <img src={logo} className="logo_header" alt="logo" />
        </div>
      </div>
      <div className="estd">
        <div className="content">
          <h2>
            EST <span className="d">D</span> 1980
          </h2>
          <p className="designed">
            Designed and built with care, filled with creative elements and
            useful options, and completely user-friendly. Set up your website
            quickly.
          </p>
          <p className="text">
            Edge Themes give you everything you need to create an amazing
            website. Designed and built with care, filled with creative elements
            and useful options, and completely user-friendly. Set up your
            website quickly and with ease. With Edge Themes you can have
            complete control over every aspect of your typography. Tons of
            shortcodes provide countless options.
          </p>
          <button className="shine_btn">Read more</button>
        </div>
      </div>
      <div className="what_we_do">
        <div className="piercing_div what_div">
          <img src={tatoo_img} alt="" />
          <div className="what_content">
            <h3>PIERCING</h3>
            <p>
              With Edge Themes you can have complete control over every aspect
              of your typography. Choose from the extensive collection of Google
              Fonts
            </p>
          </div>
        </div>
        <div className="tattoo_div what_div">
          <div className="what_content">
            <h3>TATTOO</h3>
            <p>
              With Edge Themes you can have complete control over every aspect
              of your typography. Choose from the extensive collection of Google
              Fonts
            </p>
          </div>
          <img src={tatoo_img} alt="" />
        </div>
        <div className="painting what_div">
          <img src={tatoo_img} alt="" />
          <div className="what_content">
            <h3>PAINTING</h3>
            <p>
              With Edge Themes you can have complete control over every aspect
              of your typography. Choose from the extensive collection of Google
              Fonts
            </p>
          </div>
        </div>
      </div>
      <div className="swipper_div">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="swiper_content">
              <h2>
                "I could look at a certain Tattoo, it always reminds me of a
                certain time in my life."
              </h2>
              <p>Joe biden</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_content">
              <h2>
                "I could look at a certain Tattoo, it always reminds me of a
                certain time in my life."
              </h2>
              <p>Joe biden</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_content">
              <h2>
                "I could look at a certain Tattoo, it always reminds me of a
                certain time in my life."
              </h2>
              <p>Joe biden</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_content">
              <h2>
                "I could look at a certain Tattoo, it always reminds me of a
                certain time in my life."
              </h2>
              <p>Joe biden</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="images_container_1">
        <div className="images_1">
          <img src={port_image_1} alt="" />
          <img src={port_image_2} alt="" />
        </div>
        <div className="div images_1">
          <img src={port_image_2} alt="" />
          <img src={port_image_1} alt="" />
        </div>
      </div>
      <div className="work_done">
        <div className="work_done_container">
          <img src="./h1-icon1.png" alt="" />
          <h3 className="count">283</h3>
          <p>Tattoos & artworks</p>
        </div>
        <div className="work_done_container">
          <img src="./h1-icon2.png" alt="" />
          <h3 className="count">158</h3>
          <p>Piercing done</p>
        </div>
        <div className="work_done_container">
          <img src="./h1-icon3.png" alt="" />
          <h3 className="count big">982</h3>
          <p>Corrective makeup</p>
        </div>
        <div className="work_done_container">
          <img src="./h1-icon4.png" alt="" />
          <h3 className="count">221</h3>
          <p>Custom tattoos done</p>
        </div>
      </div>
      <div className="images_container">
        <div className="image">
          <img src="./h1-team-img-1.jpg" alt="" className="images_img" />
        </div>
        <div className="image">
          <img src="./h1-team-img-2.jpg" alt="" className="images_img" />
        </div>
        <div className="image">
          <img src="./h1-team-img-1.jpg" alt="" className="images_img" />
        </div>
        <div className="image">
          <img src="./h1-team-img-2.jpg" alt="" className="images_img" />
        </div>
      </div>
      <div className="contact_container">
        <div className="address">
          <h2>NYC OFFICE</h2>
          <p className="location">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            fermentum nulla ac.
          </p>
          <div className="icons_container">
            <i className="fa-solid fa-location-pin"></i>
            <p>New Delhi, India</p>
          </div>
          <div className="icons_container">
            <i className="fa-solid fa-phone"></i>
            <p>+91 8860731905</p>
          </div>
          <div className="icons_container">
            <i className="fa-solid fa-envelope"></i>
            <p>bunkerzinks@gmail.com</p>
          </div>
        </div>
        <div className="contact_form_div">
          <form action="" className="contact_form">
            <input
              className="contact_input"
              required
              type="text"
              placeholder="NAME"
            />
            <input
              className="contact_input"
              required
              type="text"
              placeholder="E-MAIL"
            />
            <textarea
              className="contact_input message"
              required
              type="text"
              placeholder="MESSAGE"
            ></textarea>
            <button type="submit" className="shine_btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
