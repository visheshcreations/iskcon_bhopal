import React, { useEffect, useRef } from "react";
import yourImage from "/public/iskcon-delhi-official-monk-f.png";
import grass from "/public/grass.png";
import logo from "/public/logo.webp";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";
import { MdOutlineNotListedLocation } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Footer = () => {
  const imageRef = useRef(null);
  const footerRef = useRef(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current.classList.add("animate-move1");
        } else {
          imageRef.current.classList.remove("animate-move1");
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      imageObserver.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        imageObserver.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={footerRef}
        className="relative flex w-full h-[35rem] bg-red-800 flex-col md:flex-row gap-7 md:gap-40 pt-5 md:px-0 px-5 md:pt-24 fade-in"
      >
        <div className="pngs">
          <img className="absolute right-0 w-full bottom-0" src={grass} alt="grass" />
          <img
            ref={imageRef}
            id="animatedImage"
            src={yourImage}
            alt="Animated"
            className="absolute left-0 md:h-auto h-52 bottom-1"
          />
        </div>
        <div className="md:w-64 gap-2 flex flex-col md:gap-7">
          <img className="md:w-32 w-16" src={logo} alt="logo" />
          <span className="text-white text-[10px]">
            Sri Sri Radha Gopinath Temple is a ISKCON Temple situated in Patel
            Nagar, Raisen Road, Bhopal, M.P.
          </span>
          <div className="flex gap-1 md:gap-2">
            <div className="md:border border-slate-100 rounded-full p-1.5 text-white text-lg">
              <FiFacebook />
            </div>
            <div className="md:border border-slate-100 rounded-full p-1.5 text-white text-lg">
              <FaInstagram />
            </div>
            <div className="md:border border-slate-100 rounded-full p-1.5 text-white text-lg">
              <FaXTwitter />
            </div>
            <div className="md:border border-slate-100 rounded-full p-1.5 text-white text-lg">
              <FiYoutube />
            </div>
            <div className="md:border border-slate-100 rounded-full p-1.5 text-white text-lg">
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <div className="md:w-96 gap-2 flex flex-col md:gap-7 md:text-base text-[12px]">
          <span className="text-white text-xl font-serif">Contact</span>
          <div className="flex items-center text-white gap-2">
            <MdOutlineWifiCalling3 />
            <span className="cursor-pointer">6263230462</span>
          </div>
          <div className="flex items-center text-white gap-2 ">
            <RiMailSendFill />
            <span className="cursor-pointer">Randommail@gmail.com</span>
          </div>
          <div className="flex items-center text-white gap-2">
            <div className="text-lg">
              <MdOutlineNotListedLocation />
            </div>
            <span>
              Hare Krishna Land, ISKCON Bhopal, Raisen Road, Patel Nagar,
              Bhopal, Bhopal, Madhya Pradesh, 462022
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-10 mr-10">
          <div>
            <nav>
              <ul className="text-white md:text-base text-[12px] flex flex-col gap-2 md:gap-7">
                <span className="text-white text-lg md:text-xl font-serif">Explore</span>
                <li className="flex items-center cursor-pointer">
                  <div>
                    <MdOutlineDoubleArrow />
                  </div>
                  Home
                </li>
                <li className="flex items-center cursor-pointer">
                  <div>
                    <MdOutlineDoubleArrow />
                  </div>
                  About
                </li>
                <li className="flex items-center cursor-pointer">
                  <div>
                    <MdOutlineDoubleArrow />
                  </div>
                  Gallery
                </li>
                <li className="flex items-center cursor-pointer">
                  <div>
                    <MdOutlineDoubleArrow />
                  </div>
                  Media
                </li>
                <li className="flex items-center cursor-pointer">
                  <div>
                    <MdOutlineDoubleArrow />
                  </div>
                  Contact
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul className="text-white flex flex-col gap-2 md:text-base text-[12px] md:gap-7">
                <span className="text-white text-lg md:text-xl font-serif">Support</span>
                <li className="flex items-center cursor-pointer">
                  <div>
                    <MdOutlineDoubleArrow />
                  </div>
                  Donate
                </li>
                <li className="flex items-center cursor-pointer">
                  <div>
                    <MdOutlineDoubleArrow />
                  </div>
                  Volunteer
                </li>
                <li className="flex items-center cursor-pointer">
                  <div>
                    <MdOutlineDoubleArrow />
                  </div>
                  Seva
                </li>
                <li className="flex items-center cursor-pointer">
                  <div>
                    <MdOutlineDoubleArrow />
                  </div>
                  Privacy policy
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
