"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Cards/ProductCard/ProductCard";
import RightArrow from "../../assets/Icons/RightArrow";
import { IHiglight, IStopPlace } from "../../interfaces";

interface IProps {
  data: IHiglight[] | IStopPlace[];
}

const Swiper = ({ data }: IProps) => {
  let sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <div className="">
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {data.map((card: IHiglight | IStopPlace, idx) => (
            <ProductCard card={card} key={idx} />
          ))}
        </Slider>

        {currentSlide > 0 && (
          <button
            className="absolute left-4 top-32 bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center"
            onClick={previous}
          >
            <div className="transform scale-x-[-1]">
              <RightArrow />
            </div>
          </button>
        )}

        {currentSlide !== data.length - 2.4 && (
          <button
            className="absolute right-4 top-32 bg-gray-200 w-10 h-10 rounded-full flex justify-center items-center"
            onClick={next}
          >
            <RightArrow />
          </button>
        )}
      </div>
    </div>
  );
};

export default Swiper;
