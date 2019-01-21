import React from "react";
import Navbar from "../Navbar/index";
import Banner from "../Banner/index";

const Home = () => {
  return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div style={{marginTop: 60}}>
            <Banner />
        </div>
      </div>
  );
};

export default Home;
