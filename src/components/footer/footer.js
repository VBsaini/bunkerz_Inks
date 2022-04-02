import "./footer.css";
import img1 from "../../assets/gallery/16-Mandala lotus tattoo_16_11zon.webp";
import img2 from "../../assets/gallery/24-abstract buddha_31_11zon.webp";
import img3 from "../../assets/gallery/3.webp";
import img4 from "../../assets/gallery/28-beloved eyes_40_11zon.webp";
import img5 from "../../assets/gallery/35-krishna abstract_53_11zon.webp";
import img6 from "../../assets/gallery/53-name tattoo_83_11zon.webp";
import img7 from "../../assets/gallery/47-guardian angel tattoo_76_11zon.webp";
import img8 from "../../assets/gallery/39_60_11zon.webp";
export function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <div className="footer_one">
          <div className="address">
            <h2>STUDIO</h2>
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
          <div className="working_hours">
            <h3>WORKING HOURS</h3>
            <ul>
              <li>
                Monday - Friday /{" "}
                <span className="Time_footer">11:00 - 9:00pm</span>
              </li>
              <li>
                Saturday / <span className="Time_footer">12:00 - 6:00pm</span>
              </li>
              <li>
                Sunday /{" "}
                <span className="Time_footer">on God's day we don’t work</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_two">
          <div className="follow_us">
            <h3>FOLLOW US</h3>
            <ul>
              <a href="https://www.instagram.com/bunkerzinks/">
                <li>
                  <i className="fa-brands fa-instagram"></i> Instagram
                </li>
              </a>
              <a href="https://www.facebook.com/bunkerztattoo/">
                <li>
                  <i className="fa-brands fa-facebook-square"></i>Facebook
                </li>
              </a>
            </ul>
          </div>
          <div className="gallery_footer">
            <h3>GALLERY</h3>
            <div className="gallery_footer_container">
              <div className="first_gallery_footer">
                <img
                  style={{ cursor: "pointer" }}
                  src={img1}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={img2}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={img3}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={img4}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
              </div>
              <div className="second_gallery_footer">
                <img
                  style={{ cursor: "pointer" }}
                  src={img5}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={img6}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={img7}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  style={{ cursor: "pointer" }}
                  src={img8}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© 2024 Bunkerz Inks, All Rights Reserved</div>
    </footer>
  );
}
