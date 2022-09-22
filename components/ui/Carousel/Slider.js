import Arrows from "components/ui/Carousel/Arrows";
import SliderContent from "components/ui/Carousel/SliderContent";
import { useSlider } from "hooks/useSlider";
import { getImgsCarousel } from "pages/api/carousel";
import { useEffect, useState } from "react";

const Slider = () => {
  const [imagesCarousel, setImagesCarousel] = useState([]);

  useEffect(() => {
    getImgsCarousel().then(setImagesCarousel);
  }, []);
  const { activeIndex, setIsPaused, prevSlide, nextSlide } =
    useSlider(imagesCarousel);
  return (
    <div className="slider-container group">
      <SliderContent
        activeIndex={activeIndex}
        sliderImage={imagesCarousel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      />
      <Arrows
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      />
    </div>
  );
};

export default Slider;
