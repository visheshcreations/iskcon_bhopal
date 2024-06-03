import React, { useEffect, useRef, useState } from "react";
import krishnaImg from "/welcomeKrishna.webp";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailUnread } from "react-icons/io5";

const header2 = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="flex justify-around mt-60 md:mt-[38rem] md:mb-0 mb-10 bg-bottom mr-2 fade-in"
        style={{ backgroundImage: `url("/public/bgoverlay2.png")` }}
      >
        <div className=" w-[180px]  md:w-2/5 flex flex-col md:justify-center ">
          <span className="text-red-800 font-semibold text-xs md:text-lg">
            WELCOME TO ISKCON BHOPAL
          </span>
          <br />
          <span className="text-red-950 text-lg md:text-6xl leading-normal font-serif">
            May The Melodious Tunes Of Krishna's Flute Resonate In Your Life.
          </span>
          <br />
          <div className="md:w-96  md:text-base text-[10px]">
            <span>
              Hare Kṛṣṇa Hare Kṛṣṇa Kṛṣṇa Kṛṣṇa Hare Hare | Hare Rama Hare Rama
              Rama Rama Hare Hare ||
            </span>
          </div>
          <br />
          <div className="flex gap-2 md:gap-7">
            <button className="text-white bg-red-800 font-medium text-[10px] md:text-base py-1 px-2 md:px-5 md:py-2 hover:text-red-800 hover:bg-white hover:border border-red-800 transition-all">
              Know More
            </button>

            <button className="bg-white text-red-900 font-medium border border-red-800 text-[10px] md:text-base py-1 px-2 md:px-5 md:py-2 hover:bg-red-800 hover:text-white transition-all">
              Contact Us
            </button>
          </div>
        </div>
        <div>
          <img
            className="md:h-auto h-52 mr-2  rounded-tl-2xl rounded-br-2xl mb-10"
            src={krishnaImg}
            alt="krishna"
          />
        </div>
      </div>

      <div
        className="md:flex md:justify-around"
        style={{ backgroundImage: `url('/public/nitya-bg4.466defb8.jpg')` }}
      >
        <div className=" md:h-[40rem] h-96 w-80 md:mx-0 mx-7 md:w-[30rem] md:m-10 rounded-xl shadow-lg shadow-slate-400">
          <div className="rotating-image-gallery  relative w-full h-full">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
            />
          </div>
        </div>
        <div className="md:h-[40rem]  md:w-[30rem] md:m-10 flex flex-col md:items-start items-center my-8  justify-center">
          <span className="text-red-800 md:text-lg font-semibold">
            About Us
          </span>
          <br />
          <span className="font-serif md:text-4xl mx-8 md:mx-0">
            "I Am The Beginning, Middle, And End Of Creation."
          </span>
          <br />
          <span className="md:text-base text-sm mx-8 md:mx-0">
            ISKCON Bhopal is a temple, monastery and a spiritual community
            dedicated to the practice of Bhakti-yoga or rendering loving service
            to Lord Sri Krishna, the Supreme Personality of Godhead.The
            International Society for Krishna Consciousness (ISKCON), otherwise
            known as the Hare Krishna movement, includes five hundred major
            centers, temples and rural communities, nearly one hundred
            affiliated vegetarian restaurants, thousands of namahattas or local
            meeting groups, a wide variety of community projects, and millions
            of congregational members worldwide.
          </span>
          <br />
          <div>
            <ul className="list-disc md:text-base text-sm">
              <li>Helping you overcome obstacles with grace.</li>
              <li>Guiding you on the path of righteousness.</li>
              <li>Bringing peace and joy to your heart and home.</li>
            </ul>
          </div>
          <button className="text-white bg-red-800 font-medium text-base w-32 my-8 py-1 px-2  md:px-5 md:py-2 hover:text-red-800 hover:bg-white hover:border border-red-800 transition-all">
            Know More
          </button>
        </div>
      </div>

      <div className="bg-red-800 text-white md:h-40 h-32 justify-center py-3 w-full flex md:justify-evenly items-center flex-wrap">
        <div className="item1 flex gap-2 justify-center items-center md:gap-4 ml-3">
          <div className="md:text-5xl text-sm">
            <FaMapLocationDot />
          </div>
          <div className="flex flex-col md:text-base text-[10px]">
            <span>Visit Our Sri Sri Radha Gopinath Temple</span>
            <span>
              Hare Krishna Land, ISKCON Bhopal, Patel Nagar, Bhopal, Madhya
              Pradesh, 462022
            </span>
          </div>
        </div>
        <div className="item2 flex gap-4">
          <div className="md:text-5xl text-sm">
            <BiSolidPhoneCall />
          </div>
          <div className="flex flex-col  md:text-base text-[10px]">
            <span>Call Us Now</span>
            <span>+91-6263230462</span>
          </div>
        </div>
        <div className="item3 flex gap-4 md:ml-0 ml-24">
          <div className="md:text-5xl text-sm">
            <IoMailUnread />
          </div>
          <div className="flex flex-col md:text-base text-[10px]">
            <span>Send a Message</span>
            <span>RandomMail@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default header2;
