import { useSwiper } from "swiper/react";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button onClick={() => swiper.slideNext}>Next</button>
    </div>
  );
};

export default SwiperNavButton;
