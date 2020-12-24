import React from "react";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="__cus_home">
      <div className="__cus_home-detail">
        <div className="__cus_home-detail--logo">
          <img src="./images/logo.svg" alt="" />
        </div>
        <div className="__cus_home-detail--name">Restaurant Name</div>
        <div className="__cus_home-detail--address">Restaurant Adress</div>
        <div className="__cus_home-detail--greeting">
          A very good afternoon and welcome to Example Restaurant
        </div>
      </div>
      <HomeCarousel />
    </div>
  );
};

export default Home;
