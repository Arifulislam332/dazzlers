import { useEffect, useState } from "react";
import Overlay from "./Overlay";

const Slider = () => {
  const slides = [
    "https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //1
    "https://images.pexels.com/photos/6261886/pexels-photo-6261886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //2
    "https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //3
    "https://images.pexels.com/photos/3178875/pexels-photo-3178875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //4
    "https://images.pexels.com/photos/5325943/pexels-photo-5325943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", //5
  ];

  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (currImg === slides.length - 1) {
        setCurrImg(0);
      } else {
        setCurrImg(currImg + 1);
      }
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currImg]);

  return (
    <div className="w-screen h-screen relative">
      <img
        src={slides[currImg]}
        alt="Slides Photo"
        className="w-full h-full object-cover"
      />
      <Overlay />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 z-[2] flex items-center gap-3">
        {slides.map((elArr, index) => (
          <button
            key={index}
            onClick={() => setCurrImg(index)}
            className={`${
              index === currImg ? "w-10" : "w-3 animate-pulse"
            } h-3 rounded-full bg-white/80 backdrop-blur-[200]`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
