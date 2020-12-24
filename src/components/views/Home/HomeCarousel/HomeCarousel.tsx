import React from "react";
import HomeCarouselCard from "./HomeCarouselCard";
import SwiperCore, { Pagination, A11y, Autoplay, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

interface Props {}

// const slideRenderer = ({ key, index }) => (
//   <div key={key}>
//     <HomeCarouselCard key={key}>Item 1</HomeCarouselCard>
//     <HomeCarouselCard>Item 2</HomeCarouselCard>
//     <HomeCarouselCard>Item 3</HomeCarouselCard>
//     <HomeCarouselCard>Item 4</HomeCarouselCard>
//   </div>
// );

SwiperCore.use([Pagination, A11y, Autoplay, Virtual]);

const HomeCarousel: React.FC<Props> = () => {
  return (
    <div className="__cus_home-carousel">
      <div className="__cus_home-carousel--wrapper">
        <Swiper
          autoplay={{
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          virtual
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <HomeCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <HomeCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <HomeCarouselCard />
          </SwiperSlide>
          <SwiperSlide>
            <HomeCarouselCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCarousel;
