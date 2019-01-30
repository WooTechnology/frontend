import React from "react";
import Navbar from "../Navbar/index";
import Banner from "../Banner/index";
import About from "../About/index";
import Footer from "../Footer/index";
import Mentorship from "../Mentorship/index";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ marginTop: 60 }}>
        <Banner />
        <About />
        <Mentorship />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
