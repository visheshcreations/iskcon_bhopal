import React, { useEffect, useRef } from "react";
import { FaHandsPraying } from "react-icons/fa6";

const header4 = () => {
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
        style={{ backgroundImage: `url('/public/nitya-bg4.466defb8.jpg')` }}
        className=" fade-in h-full w-full flex flex-col bg-cover"
      >
        <div className="flex justify-center items-center">
          <div className="flex justify-center  flex-col  h-32 md:h-44 items-center w-5/6 md:w-1/2">
            <span className="text-red-800 font-semibold text-[12px] md:text-base mb-4 mt-4 md:mb-8 md:mt-10">
              TEACHINGS OF BHAGWAT GEETA
            </span>
            <span className="text-red-950 font-serif text-lg md:text-4xl">
              Dive into the Eternal Wisdom: Insights from Lord Krishna's
              Guidance
            </span>
          </div>
        </div>
        <br />
        <div className="flex md:flex-nowrap flex-wrap gap-4 md:gap-10 justify-center mb-16 md:mt-5">
          <div className="bg-white  h-96 w-72 p-5 hidden md:flex flex-col md:mt-40 hover:bg-red-50 cursor-all-scroll border-2 border-gray-200">
            <div className="text-red-800 text-4xl flex justify-center mt-2 mb-4">
              <FaHandsPraying />
            </div>
            <span>
              Lord Krishna, a significant figure in Hinduism, is associated with
              the concept of Dharma, which refers to righteous duty and moral
              order. In the Hindu scripture Bhagavad Gita, Krishna imparts
              spiritual wisdom to the warrior Arjuna, emphasizing the importance
              of following one's Dharma.
            </span>

            <a
              className="flex justify-center text-red-800 font-semibold underline mt-4"
              href="#"
            >
              Know More
            </a>
          </div>

          <div className="bg-white h-96 w-72 p-5 flex flex-col md:mt-20 hover:bg-red-50 cursor-all-scroll border-2 border-gray-200">
            <div className="text-red-800 text-4xl flex justify-center mt-2 mb-4">
              <FaHandsPraying />
            </div>

            <span>
              Lord Krishna, a significant figure in Hinduism, is associated with
              the concept of Dharma, which refers to righteous duty and moral
              order. In the Hindu scripture Bhagavad Gita, Krishna imparts
              spiritual wisdom to the warrior Arjuna, emphasizing the importance
              of following one's Dharma.
            </span>

            <a
              className="flex justify-center text-red-800 font-semibold underline mt-4"
              href="#"
            >
              Know More
            </a>
          </div>
          <div className="bg-white h-96 w-72 p-5 flex flex-col hover:bg-red-50 cursor-all-scroll border-2 border-gray-200">
            <div className="text-red-800 text-4xl flex justify-center mt-2 mb-4">
              <FaHandsPraying />
            </div>

            <span>
              Bhakti refers to devotion and intense love towards a personal god,
              and in the case of Krishna, it involves a deep and loving
              connection with him. Bhagavad Gita emphasize the path of devotion
              as a powerful means to attain spiritual liberation.
            </span>
            <a
              className="flex justify-center text-red-800 p-5 font-semibold underline mt-4"
              href="#"
            >
              Know More
            </a>
          </div>
          <div className="bg-white h-96 w-72 p-5 flex flex-col md:mt-20 hover:bg-red-50 cursor-all-scroll border-2 border-gray-200">
            <div className="text-red-800 text-4xl flex justify-center mt-2 mb-4">
              <FaHandsPraying />
            </div>

            <span>
              Lord Krishna also imparts teachings on the path of Yoga in the
              Bhagavad Gita. The term "Yoga" in this context refers to the union
              of the individual soul (Atman) with the universal consciousness
              (Brahman or the ultimate ending of the universe).
            </span>
            <a
              className="flex justify-center text-red-800 p-5 font-semibold underline mt-4"
              href="#"
            >
              Know More
            </a>
          </div>

          <div className="bg-white h-96 w-72 p-5 hidden md:flex flex-col md:mt-40 hover:bg-red-50 cursor-all-scroll border-2 border-gray-200">
            <div className="text-red-800 text-4xl flex justify-center mt-2 mb-4">
              <FaHandsPraying />
            </div>

            <span>
              Lord Krishna, a significant figure in Hinduism, is associated with
              the concept of Dharma, which refers to righteous duty and moral
              order. In the Hindu scripture Bhagavad Gita, Krishna imparts
              spiritual wisdom to the warrior Arjuna, emphasizing the importance
              of following one's Dharma.
            </span>

            <a
              className="flex justify-center text-red-800 font-semibold underline mt-4"
              href="#"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default header4;
