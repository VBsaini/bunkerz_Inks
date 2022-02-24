import "./navbar.css";
import logo from "../../assets/imgs/yellow_logo_jpg-removebg.png";

export function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Bunkerz Inks</h1>
        <div className="img_container">
          <img src={logo} width="40" height="40" alt="" />
        </div>
      </div>
      <ul className="links_ul">
        <li className="link active">
          <a href="#">Home</a>
        </li>
        <li className="link">
          <a href="#">Gallery</a>
        </li>
        <li className="link">
          <a href="#">Blogs</a>
        </li>
      </ul>
    </nav>
  );
}
