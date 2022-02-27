import "./footer.css";
import img from "../../assets/imgs/clem-onojeghuo-8soQzdz9XXA-unsplash.jpg";
export function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <div className="footer_one">
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
          <div className="working_hours">
            <h3>WORKING HOURS</h3>
            <ul>
              <li>
                Monday - Tuesday /{" "}
                <span className="Time_footer">Appointment</span>
              </li>
              <li>
                Wednesday - Friday /{" "}
                <span className="Time_footer">12:00 - 9:00pm</span>
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
              <a href="#">
                <li>
                  <i className="fa-brands fa-instagram"></i> Instagram
                </li>
              </a>
              <a href="#">
                <li>
                  <i className="fa-brands fa-facebook-square"></i>Facebook
                </li>
              </a>
              <a href="#">
                <li>
                  <i className="fa-brands fa-twitter"></i>Twitter
                </li>
              </a>
            </ul>
          </div>
          <div className="gallery_footer">
            <h3>GALLERY</h3>
            <div className="gallery_footer_container">
              <div className="first_gallery_footer">
                <img
                  src={img}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  src={img}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  src={img}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  src={img}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
              </div>
              <div className="second_gallery_footer">
                <img
                  src={img}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  src={img}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  src={img}
                  alt="gallery img"
                  onClick={() => {
                    props.navigate("Gallery");
                  }}
                />
                <img
                  src={img}
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
      <div className="copyright">
        © 2017 Qode Interactive, All Rights Reserved
      </div>
    </footer>
  );
}
