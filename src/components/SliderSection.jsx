import React from "react";
import Slider from "react-slick";

const sliderImages1 = [
  "/images/slider/qnbg.png",
  "/images/slider/Qhome.png",
  "/images/slider/Qc.png",
  "/images/slider/qcom.png",
  "/images/slider/Qt.png",
];

const sliderImages2 = [
  "/images/slider/amnbg.png",
  "/images/slider/A1m.png",
  "/images/slider/Computers.png",
  "/images/slider/Electronics.png",
  "/images/slider/MR.png",
];

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      id="slider"
      style={{ background: "#0d0d17" }}
      className="h-full px-2 p-10 md:px-10 flex md:flex-row flex-col relative "
    >
      {[sliderImages1, sliderImages2].map((images, index) => (
        <div key={index} className="md:w-2/4 w-full h-full relative ">
          <Slider {...settings} className="h-[90%] custom-slider">
            {images.map((image, i) => (
              <div key={i} className="relative cursor-grab">
                <img
                  src={image}
                  alt={`Slide ${i + 1}`}
                  className="w-full object-fit"
                />
                {i !== 0 && (
                  <span
                    className="absolute bottom-2 right-2 text-white text-sm px-2 py-1 rounded-md cursor-pointer hover:font-bold transition duration-300
                    "
                    onClick={() => console.log("Read More clicked")}
                  >
                    Read More..
                  </span>
                )}
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default SliderSection;
