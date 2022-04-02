import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import port_image_1 from "../../assets/imgs/portfolio-image-1.jpg";
import port_image_2 from "../../assets/imgs/portfolio-image-2.jpg";
import port_image_3 from "../../assets/imgs/portfolio-image-3.jpg";
import port_image_4 from "../../assets/imgs/portfolio-image-4.jpg";
import tatoo_img from "../../assets/imgs/tatto.webp";
import painting_img from "../../assets/imgs/BF927290-B1DC-4962-AB49-FBA3D474956A.JPG";
import piercing_img from "../../assets/imgs/piercing.webp";
import logo from "../../assets/imgs/yellow_logo_jpg-removebg.png";
import h1_icon_1 from "../../assets/imgs/h1-icon1.png";
import h1_icon_2 from "../../assets/imgs/h1-icon2.png";
import h1_icon_3 from "../../assets/imgs/h1-icon3.png";
import h1_icon_4 from "../../assets/imgs/h1-icon4.png";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

import "./Home.css";
export function Home() {
  const form = useRef();

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
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2sfpitl",
        "template_ephqxmo",
        form.current,
        "KossvKSFi2tAabehc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="header">
        <div className="logo_header_div">
          <img src={logo} className="logo_header" alt="logo" />
        </div>
      </div>
      <div className="estd">
        <div className="content">
          <h2>
            EST <span className="d">D</span> 2010
          </h2>
          <p className="designed">
            Bunkerz Inks is a place of creative minds thinking alike to create a
            unique experience for you. Beautiful ideas create countless options
            and with our experience we can customize your abstract ideas into a
            strong wedge of permanent memory for you.
          </p>
          <p className="text">
            Founded in 2010, our Founder Bharat comes from a medical background
            and hence understands that Hygiene is one of the most imperative
            factors of getting inked. Our peers and other artists create a
            consortium of unique tattoos that give you an adjective that would
            stay with you with the rest of your life.
          </p>
        </div>
      </div>
      <div className="what_we_do">
        <div className="piercing_div what_div">
          <img src={piercing_img} alt="" />
          <div className="what_content">
            <h3>PIERCING</h3>
            <p>
              One of the most experienced Piercing artists in North India with
              experience in Medical Industry. Belly piercing, Dermal piercing,
              Clit piercing, Nipple piercing is something that we specialise in.
            </p>
          </div>
        </div>
        <div className="tattoo_div what_div">
          <div className="what_content">
            <h3>TATTOO</h3>
            <p>
              Experience customised tattoos with unique abstract cohesiveness.
              Choose from Pop, Trendy, Hipster, Imperial and Traditional tattoo
            </p>
          </div>
          <img src={tatoo_img} alt="" />
        </div>
        <div className="painting what_div">
          <img src={painting_img} alt="" />
          <div className="what_content">
            <h3>PAINTING</h3>
            <p>
              Our artists don't just sit down and tattoo.. They thrive for space
              to curate a perfectly balanced art, on canvas, on wood, metal,
              walls, t-shirts, (you name it, we do it)
            </p>
          </div>
        </div>
      </div>
      <div className="swipper_div">
        <Swiper
          draggable={true}
          autoplay={{ delay: 2000 }}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="swiper_content">
              <h2>
                "Good experience at the studio, very creative and professional
                artist are there. Thanks for the tattoo bharat"
              </h2>
              <p>Yogesh kumar</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_content">
              <h2>
                "The best tattoo artist in Delhi, my brother got his tattoo made
                from here, even I got my tattoos made from here!"
              </h2>
              <p>Era Sundriyal</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_content">
              <h2>
                "Trustable and professional..Studio has a different vibe. Go and
                have a best experience of your tattoo."
              </h2>
              <p>jatin gera</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper_content">
              <h2>
                "They were amazing people and service was just amazing. I will
                100% recommend going to Bunkers Inks Tattoo and Piercing
                Studio."
              </h2>
              <p>Debatri Pramanik</p>
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
          <img src={port_image_3} alt="" />
          <img src={port_image_4} alt="" />
        </div>
      </div>
      <div className="work_done">
        <div className="work_one">
          <div className="work_done_container">
            <img src={h1_icon_1} alt="" />
            <h3 className="count">283</h3>
            <p>Tattoos & artworks</p>
          </div>
          <div className="work_done_container">
            <img src={h1_icon_2} alt="" />
            <h3 className="count">158</h3>
            <p>Piercing done</p>
          </div>
        </div>
        <div className="work_two">
          <div className="work_done_container">
            <img src={h1_icon_3} alt="" />
            <h3 className="count big">982</h3>
            <p>Corrective makeup</p>
          </div>
          <div className="work_done_container">
            <img src={h1_icon_4} alt="" />
            <h3 className="count">221</h3>
            <p>Custom tattoos done</p>
          </div>
        </div>
      </div>
      <div className="contact_container">
        <div className="address">
          <h2>STUDIO:</h2>
          <p className="location">
            13-A, First Floor, Lake side Hauz Khas Village Delhi 110016
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
          <form
            action=""
            ref={form}
            onSubmit={sendEmail}
            className="contact_form"
          >
            <input
              className="contact_input"
              required
              name="name"
              type="text"
              placeholder="NAME"
            />
            <input
              className="contact_input"
              required
              name="email"
              type="text"
              placeholder="E-MAIL"
            />
            <textarea
              className="contact_input message"
              required
              type="text"
              name="message"
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
