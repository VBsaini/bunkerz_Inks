import { useState } from "react";
import "./Gallery.css";
import InfiniteScroll from "react-infinite-scroller";

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
}

const images = importAll(
  require.context("../../assets/gallery", false, /\.(webp)$/)
);

export const Gallery = () => {
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [imgCount, setImgCount] = useState(20);
  let values = Object.values(images);
  const loadFunc = () => {
    if (!(imgCount >= values.length)) {
      setImgCount(imgCount + 20);
    } else {
      setImgCount(values.length);
      setHasMore(false);
    }
  };
  return (
    <div>
      <div className="gallery_header ">
        <h2>GALLERY</h2>
      </div>
      <div className="images_containersa ">
        <InfiniteScroll
          className="images_container"
          pageStart={0}
          hasMore={hasMore}
          loadMore={loadFunc}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {values.slice(0, imgCount).map((value) => (
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
        </InfiniteScroll>
        {/* {values.slice(0, 20).map((value) => (
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
        ))} */}
      </div>
    </div>
  );
};
