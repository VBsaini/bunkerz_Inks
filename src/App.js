import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/footer/footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Blogs } from "./components/blogs/Blogs";

function App() {
  const [component, setComponent] = useState(Home);
  const [navigation, setNavigation] = useState("Home");
  useEffect(() => {
    let item = localStorage.getItem("navigation");
    if (item) {
      setNavigation(item);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("navigation", navigation);
  }, [navigation]);

  useEffect(() => {
    document.querySelectorAll(".link").forEach((ele) => {
      if (ele.classList.contains(navigation)) {
        ele.classList.add("active");
      } else {
        ele.classList.remove("active");
      }
    });
    switch (navigation) {
      case "Home":
        window.scrollTo(0, 0);
        setComponent(Home);
        break;
      case "Gallery":
        window.scrollTo(0, 0);
        setComponent(<Gallery />);
        break;
      case "Blogs":
        window.scrollTo(0, 0);
        setComponent(Blogs);
        break;
      default:
        break;
    }
  }, [navigation]);

  const Nav = (nav) => {
    setNavigation(nav);
  };
  return (
    <div className="App">
      <Navbar navigate={Nav} />
      {component}
      <Footer navigate={Nav} />
    </div>
  );
}

export default App;
