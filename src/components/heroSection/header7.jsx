import React, { useEffect, useRef } from 'react';

const Header7 = () => {
  const headerRef = useRef(null);

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
    <div className="flex justify-center my-10">
      <div
        ref={headerRef}
        className="relative w-11/12 md:w-3/4 h-40 md:h-72 bg-cover bg-center fade-in"
        style={{
          backgroundImage: "url('/src/assets/iskcon-bhopal-mandir.webp')",
        }}
      >
        <div className="absolute inset-0 bg-red-800 bg-opacity-80 flex items-center">
          <div className="flex justify-evenly items-center">
            <div className="text-white flex gap-1 md:gap-4 flex-wrap w-2/3">
              <span className="text-yellow-300 font-bold text-[10px] md:text-lg">
                ISKCON BHOPAL
              </span>
              <span className="md:text-2xl text-[12px] font-serif">
                Find joy in the path of selfless service infused with devotion
                to Krishna, where every action becomes a sacred offering, and
                the journey itself becomes a blissful communion with the
                divine.
              </span>
            </div>
            <div>
              <button className="md:text-lg text-[10px] bg-orange-500 font-semibold text-white py-2 px-1 md:px-3 md:py-2 hover:bg-orange-700">
                DONATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header7;
