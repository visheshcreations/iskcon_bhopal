import React, { useEffect, useRef ,useState } from 'react';


const videos = {
  video1: 'https://www.youtube.com/embed/kajkRPYONMg?si=Ke_okSuVaMZziNpP',
  video2: 'https://www.youtube.com/embed/kSh5sU5_Xdo?si=s0G5XE-_ezYmZ8lH',
  video3: 'https://www.youtube.com/embed/S_z4bUclCtc?si=Eb28w-Tk3LY_HbM2',
  video4: 'https://www.youtube.com/embed/5pE19hBCRd4?si=S4Qz6KpnezJVCjW1',
  video5: 'https://www.youtube.com/embed/MIHdDQ4Li2U?si=vCr3_8aiLxdIu2r0',
  video6: 'https://www.youtube.com/embed/-aAi9_gOR14?si=cuoxM2pybgW26ctg',
};

const images = {
  image1: '/videoimg1.png',
  image2: '/videoimg2.png',
  image3: '/videoimg3.png',
  image4: '/videoimg4.png',
  image5: '/videoimg5.png',
  image6: '/videoimg6.png',
};

const Header6 = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleImageClick = (videoKey) => {
    setSelectedVideo(videos[videoKey]);
  };

  const handleCloseClick = () => {
    setSelectedVideo(null);
  };




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
    <div ref={headerRef} className="p-5 fade-in" style={{backgroundImage:`url('/public/nitya-bg4.466defb8.jpg')`}}>
      <div className="flex justify-center mt-7 mb-8 md:mt-20 md:mb-16 md:text-5xl font-serif">
        <span>Connect With us on YouTube</span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(images).map((key, index) => (
          <img
            key={index}
            src={images[key]}
            alt={`thumbnail-${index}`}
            className="w-full cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => handleImageClick(`video${index + 1}`)}
          />
        ))}
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-black">
            <iframe
              className="w-[80vw] h-[45vw]"
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleCloseClick}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className='flex justify-center gap-10 mt-5'>
        <button className='md:px-2 md:py-2 px-1 py-1 md:text-base text-sm bg-gray-500 text-white hover:bg-gray-800 transition-all rounded-sm flex justify-center items-center'>View More</button>
        <button className='md:px-4 md:py-2 px-2 py-1   md:text-base text-sm bg-red-500 hover:bg-gray-500 text-white rounded-sm flex justify-center items-center '>Suscribe</button>
      </div>
    </div>
  );
};

export default Header6;
