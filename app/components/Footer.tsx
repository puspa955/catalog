"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import catalog from "../../public/catalog.svg";
import creative from "../../public/creative.svg";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <div
        className="lg:h-[480px] lg:w-full md:w-[768px] md:h-[550px] w-[375px] h-[748px] flex lg:flex-row flex-col gap-14 lg:gap-36 relative"
        style={{
          backgroundImage: 'url("/footer.png")', // Replace with the path to your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#002D5BCC] opacity-100"></div>
        
        <div className="lg:ml-16 lg:mt-16 px-6 pt-8 relative z-20">
          <ul>
            <p className="text-gray-800 font-bold text-3xl">
              <Link href="/">
                <Image src={catalog} alt="Logo" width={250} height={250} />
              </Link>
            </p>
            <p className="text-slate-200 text-[14px] pt-4">
              We are a collaboration of non-government<br/> organisation and professionals working to<br/> ensure that government spending.
            </p>
            <div className="flex gap-6 text-slate-200 pt-4">
              <FaInstagram className="text-xl cursor-pointer" />
              <FaTwitter className="text-xl cursor-pointer" />
              <FaLinkedin className="text-xl cursor-pointer" />
              <FaFacebook className="text-xl cursor-pointer" />
            </div>
          </ul>
        </div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 px-6 gap-6 items-center relative z-20">
          <div className="text-[18px]">
            <ul>
              <p className="text-slate-200 font-bold text-[16px]">Products</p>
              <li className="text-slate-200 pt-4 text-[14px] hover:text-blue-600 cursor-pointer">
                Formats
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Solution
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Integration
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Feature
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Enterprise
              </li>
            </ul>
          </div>
          <div className="text-[16px]">
            <ul>
              <p className="text-slate-200 font-bold">Resources</p>
              <li className="text-slate-200 pt-4 text-[14px] hover:text-blue-600 cursor-pointer">
                Partners
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Community
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Developers
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                App
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div className="text-[16px] lg:pb-8 md:pb-8">
            <ul>
              <p className="text-slate-200 font-bold">Why Choose Us?</p>
              <li className="text-slate-200 pt-4 text-[14px] hover:text-blue-600 cursor-pointer">
                Channels
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Scale
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Watch the Demo
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Our Competition
              </li>
            </ul>
          </div>
          <div className="text-[16px] lg:pb-8 lg:pl-8 md:pl-8 md:pb-8">
            <ul>
              <p className="text-slate-200 font-bold">Company</p>
              <li className="text-slate-200 pt-4 text-[14px] hover:text-blue-600 cursor-pointer">
                About US
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                News
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Leadership
              </li>
              <li className="text-slate-200 pt-2 text-[14px] hover:text-blue-600 cursor-pointer">
                Media Kit
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-[96px] px-24 bottom-2 lg:bottom-8 z-20">
        <h1 className="text-gray-500 text-sm text-[14px] pt-2">
          Terms and conditions
        </h1>
        <Image src={creative} alt="footer" width={100} height={100} />
      </div>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-4 right-4 bg-[#002D5BCC] text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition duration-300 z-20"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
};

export default Footer;
