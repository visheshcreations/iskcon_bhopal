import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";

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
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 217, 107, 0.42) 0%, rgba(0, 0, 0, 0.52) 100%), url("/src/assets/srila-prabhupada-L.jpg")`,
        }}
      >
        <div className="great-vibes-regular mt-36 md:mt-40 text-white h-52 md:h-72 w-96 ml-44 md:ml-64 ">
          <span className="md:text-5xl text-base">Glorious </span>
          <br />
          <div className="md:block hidden">
            {" "}
            <br />
          </div>

          <span className="md:text-5xl text-base">Srila Prabhupada</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-orange-600  hover:bg-orange-700 transition-all cursor-pointer  rounded-full md:p-8 p-2 text-base md:text-2xl text-slate-50 md:mr-0 mr-6 md:ml-10">
            <FaArrowRight />
          </div>
          <span className="md:ml-10 md:mr-0 mr-3 text-slate-50 text-[8px] md:text-lg">
            Know More
          </span>
        </div>

        <div
          className="absolute inset-0 bg-cover bg-top md:h-20 h-8 z-10 transform scale-x-[-1] scale-y-[-1]"
          style={{
            backgroundImage: `url("/public/blursp.svg")`,
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full md:h-20 h-8 bg-cover bg-bottom z-1 transform scale-x-[1] scale-y-[1]"
          style={{
            backgroundImage: `url("/public/blursp.svg")`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Header3;
