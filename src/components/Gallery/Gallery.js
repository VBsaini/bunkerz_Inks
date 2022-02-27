import { useState } from "react";
import "./Gallery.css";

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
}

const images = importAll(
  require.context("../../assets/gallery_images", false, /\.(png|jpe?g|svg)$/)
);

export const Gallery = () => {
  const [count, setCount] = useState(0);
  let values = Object.values(images);
  if (count === values.length - 1) {
    document.querySelector("body").style.overflowY = "scroll";
    document.querySelector("nav").style.display = "flex";
    document
      .querySelector(".gallery_header")
      .classList.remove("loading_container");
    document
      .querySelector(".images_container")
      .classList.remove("loading_img_container");
    document.querySelector(".spinner").classList.add("dis_none");
  }
  return (
    <div>
      <div className="gallery_header loading_container">
        <h2>GALLERY</h2>
      </div>
      <div className="spinner">
        <div className="loader"></div>
      </div>
      <div className="images_container loading_img_container">
        {values.map((value) => (
          <div className="gallery_img_container" key={value}>
            <img
              className="gallery_img"
              src={value}
              alt=""
              onLoad={() => {
                setCount(count + 1);
              }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};
