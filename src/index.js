import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/Home";

// import Hero from "./components/hero";
// import Article from "./components/article";
// import Picture from "./components/pictures";
// import Footer from "./components/footer";
// import SideArticle from "./components/sidearticle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/Article";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar /> */}

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articledetail" element={<ArticlePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
