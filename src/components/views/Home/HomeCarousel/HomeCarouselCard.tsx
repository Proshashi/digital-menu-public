import React from "react";

interface Props {
  key?: string;
}

const HomCarouselCard: React.FC<Props> = ({ key }) => {
  return (
    <div className="__cus_home-carousel--card" key={key}>
      <div className="__cus_home-carousel--card__image">
        <img src="./images/Chicken-Biryani.png" alt="" />
      </div>
      <div className="__cus_home-carousel--card__detail">
        <div className="__cus_home-carousel--card__detail_title">
          <div className="name">Chicken Biryani </div>
          <div className="price">
            <div className="price-previous">Rs. 450</div>
            <div className="price-descounted">Rs. 325</div>
          </div>
        </div>
        <div className="__cus_home-carousel--card__detail_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.....
        </div>
      </div>
    </div>
  );
};

export default HomCarouselCard;
