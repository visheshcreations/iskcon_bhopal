import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import spbg from "/srila-prabhupada-L.jpg";
import angles from "/blursp.svg";

const Header3 = () => {
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
  return (
    <>
      <div
        ref={headerRef}
        className="relative w-full h-44 md:h-[40rem] bg-no-repeat bg-contain md:bg-cover opacity-85 flex justify-center items-center fade-in"
      >
        <img className="" src={spbg} alt="bg" />
        <div className="great-vibes-regular mt-36 md:mt-40 text-white h-52 md:h-72 md:w-96 ml-24 md:ml-64 absolute">
          <span className="md:text-5xl text-base">Glorious </span>
          <br />
          <div className="md:block hidden">
          
            <br />
          </div>

          <span className="md:text-5xl text-base">Srila Prabhupada</span>
        </div>
        <div className="flex flex-col right-2 md:right-60 absolute">
          <div className="bg-orange-600  hover:bg-orange-700 transition-all cursor-pointer  rounded-full md:p-8 p-2 text-base md:text-2xl text-slate-50 md:mr-0 mr-6 md:ml-10">
            <FaArrowRight />
          </div>
          <span className="md:ml-10 md:mr-0 mr-3 text-slate-50 text-[8px] md:text-lg">
            Know More
          </span>
        </div>

        <div>
          <img
            className="absolute top-0 md:-top-6 left-0 w-full md:h-20 h-8 bg-cover bg-bottom z-1 transform scale-x-[-1] scale-y-[-1]"
            src={angles}
            alt="angles"
          />
        </div>
        <div>
          <img
            className="absolute bottom-0 md:-bottom-6 left-0 w-full md:h-20 h-8 bg-cover bg-bottom z-1 transform scale-x-[1] scale-y-[1]"
            src={angles}
            alt="angles"
          />
        </div>
      </div>
    </>
  );
};

export default Header3;
