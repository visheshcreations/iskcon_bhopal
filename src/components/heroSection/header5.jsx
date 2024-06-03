import React, { useEffect, useRef } from 'react';
import Krishnapng from '/mahabharat.png';

const Header5 = () => {
  const imageRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current.classList.add('animate-move2');
        } else {
          imageRef.current.classList.remove('animate-move2');
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);


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
    <div
      ref={footerRef}
      
      style={{ backgroundImage: `url('/public/nitya-bg4.466defb8.jpg')` }}
    >
      <div
      ref={headerRef}
        className="bg-cover flex justify-between items-center flex-wrap md:flex-nowrap fade-in"
        style={{ backgroundImage: "url('/src/assets/blueangle.png')" }}
      >
        <div className="content gap-3 md:gap-5 mt-14 md:mt-0 md:mb-40 px-5 md:px-0 md:ml-6 text-[10px] md:text-[15px] md:w-2/4 h-96 flex items-center flex-col">
          <div>
            <span className="text-white text-sm md:text-2xl">Karma</span>
          </div>
          <div>
            <span className="text-white">
              Ever wondered why bad things happen to good people? Why we suffer?
              Why some days are awesome and others morose? If God exists, why
              does He keep quiet about it? The answer to all the above questions
              is karma. Karma is one of those topics that many people know
              about, but few understand the intricacies of it. In literal terms,
              “karma” means “activity” and the law of karma regulates the
              reactions to our activities. If we act in good, or pious ways, we
              reap good reactions. If we act in impious, sinful, or destructive
              ways, we reap bad reactions in the future. Christian theology
              explains, “As ye sow so shall ye reap” while in physics karma is
              expressed by Newton’s Law, “For every action there is an equal and
              opposite reaction.” Karmic reactions include not only things that
              happen to us, but determine our health, wealth, intelligence,
              physical appearance, and social status, as well as our
              personalities and inclinations. While we have some degree of
              freedom to choose our current actions, our choices are influenced
              by our natures, or personalities, which have developed from our
              previous actions. Karma thus locks us up in a cycle of action and
              subsequent reaction. As long as we are in this cycle, we will
              experience both happiness and distress. Even if we act in a pious
              way, we destine ourselves to accept another material body at death
              to enjoy the reactions to our materially good actions. As long as
              we accept a material body we can not avoid the miseries of
              disease, old age, and death. Fortunately karma is temporary. We
              can break free from its bonds by performing spiritual acts in
              service to Krishna. Such acts of devotion, or bhakti-yoga, purify
              the soul and gradually awaken our spiritual knowledge and innate
              love for Krishna. Thus, both our karma and our long-standing
              desire to enjoy life within the illusory material world—the root
              cause of our bondage—are destroyed.
            </span>
          </div>
        </div>
        <div className="imagepng flex justify-end">
          <img id="animatedImage" ref={imageRef} src={Krishnapng} alt="Krishna" />
        </div>
      </div>
    </div>
  );
};

export default Header5;
