import React, { useState, useRef, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const sliderData = [
  {
    id: 1,
    img: "b1.jpg",
    title: "Best Seller",
    description:
      "“The Gita can be seen as the main literary support for the great religious civilization of India, the oldest surviving culture in the world. The present translation and commentary is another manifestation of the permanent living importance of the Gita.”",
  },
  {
    id: 2,
    img: "b2.jpg",
    title: "Iskcon Mayapur",
    description:
      "The holiest of all places in entire India, Mayapur Chandrodaya Temple of ISKCON is the major reason why devotees all over the world come to this sacred land. Inside you can see the magnificent deities of Pancatattva, Lord Nrisingha Dev, Srila Prabhupada and Radha-Madhav with the Gopis. This is a place flowing with devotion like no other place on earth",
  },
  {
    id: 3,
    img: "b3.jpg",
    title: "Hare Krishna",
    description:
      "Bhakti refers to devotion and intense love towards a personal god, and in the case of Krishna, it involves a deep and loving connection with him. Bhagavad Gita emphasize the path of devotion as a powerful means to attain spiritual liberation.",
  },
  {
    id: 4,
    img: "b4.jpg",
    title: "Srila Prabhupada",
    description:
      "A. C. Bhaktivedanta Swami Prabhupada was a spiritual, philosophical, and religious teacher from India who spread the Hare Krishna mantra and the teachings of “Krishna consciousness” to the world.",
  },
  {
    id: 5,
    img: "b5.jpeg",
    title: "Food donation",
    description:
      "Anna daan is the act of donating food to the needy. In Vedic culture, it is considered one of the most pious and virtuous acts. Anna Daan is considered to be Mahadaan. It is believed that offering food to others is equivalent to offering it to God Himself.",
  },
];

const SliderBanner = () => {
  const [activeSlide, setActiveSlide] = useState(sliderData[0]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  const prevSliderHandler = () => {
    if (!(activeSlide.id > 1)) return;
    setActiveSlide(sliderData[activeSlide.id - 1 - 1]);
  };

  const nextSliderHandler = () => {
    if (!(activeSlide.id < sliderData.length)) return;
    setActiveSlide(sliderData[activeSlide.id]);
  };

  return (
    <div ref={sliderRef} className="fade-in flex-1 w-full h-full">
      <div
        className="absolute z-0 w-full md:h-3/4 h-48 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("/${activeSlide.img}")` }}
      >
        <div className="hidden text-white w-full h-full justify-center items-start md:flex flex-col -mt-8 pl-12 gap-4">
          <div className="font-bold text-4xl">{activeSlide.title}</div>
          <div className="w-80">{activeSlide.description}</div>
          <button className="bg-white rounded transition-all py-2 px-3 hover:bg-slate-200 hover:scale-105 active:scale-95 active:bg-slate-400 text-black font-bold">
            See more
          </button>
        </div>
      </div>

      <div className="flex justify-end md:justify-between items-center gap-2 absolute bottom-[18.5rem] md:bottom-40 right-0 w-3/4 md:w-3/6 pr-2">
        {sliderData.map((slideObj, ind) => (
          <div
            key={`${slideObj.id}_${ind}`}
            onClick={() => setActiveSlide(slideObj)}
            className={`relative w-10 md:w-32 h-5 md:h-16 bg-no-repeat bg-cover cursor-pointer transition-all ${
              slideObj.id === activeSlide.id
                ? "scale-110 brightness-125 rounded border border-white"
                : ""
            }`}
            style={{
              backgroundImage: `url("/${slideObj.img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-[23rem] px-1 w-full flex justify-between md:px-4 items-center gap-4 text-white text-lg md:text-2xl mb-4">
        <button
          className="cursor-pointer transition-all hover:text-gray-200 active:text-gray-400 hover:scale-105 active:scale-95"
          onClick={prevSliderHandler}
        >
          <FaArrowAltCircleLeft />
        </button>

        <button
          className="cursor-pointer transition-all hover:text-gray-200 active:text-gray-400 hover:scale-105 active:scale-95"
          onClick={nextSliderHandler}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default SliderBanner;
