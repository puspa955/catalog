"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '../../public/catalog.svg';
import { BellElectric, Book, Lightbulb, Pause, PersonStanding, Play, Users, Video, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <nav className="border-b-2 p-4 flex justify-between items-center lg:w-screen px-24 font-semibold text-[16px]">
      <div className="flex items-center">
        <Link href='/'>
          <Image src={LogoImage} alt="Logo" width={160} height={160} />
        </Link>
        <a href="#" className="text-white mr-8 ml-8">Home</a>
        <a href="#" className="text-white mr-8">About Us</a>
        <a href="#" className="text-white mr-8">Case Studies</a>

        <div className="relative flex items-center group">
          <button className="text-white mr-8 focus:outline-none flex items-center">
            Resources
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="absolute top-full left-0 w-[512px] bg-white p-2 rounded-md shadow-lg hidden group-hover:block">
            <a href="#" className="block text-gray-800 hover:bg-gray-200 py-2 px-4 mb-2">
              <div className="flex items-center">
                <Book className="mr-3 text-[#1d6ea2]" />
                <span>Blog</span>
              </div>
              <p className="text-gray-500 text-[13px] font-normal ml-8">The latest industry news, updates and info.</p>
            </a>
            <a href="#" className="block text-gray-800 hover:bg-gray-200 py-2 px-4 mb-2">
              <div className="flex items-center">
                <Users className='mr-3 text-[#1d6ea2]'/>
                <span>Customers stories</span>
              </div>
              <p className="text-gray-500 text-[13px] font-normal ml-8">Learn how our customers are making big changes.</p>
            </a>
            <a href="#" className="block text-gray-800 hover:bg-gray-200 py-2 px-4">
              <div className="flex items-center">
                <Play className='mr-3 text-[#1d6ea2]'/>
                <span>Video tutorials</span>
              </div>
              <p className="text-gray-500 text-[13px] font-normal ml-8">Get up and running on new features and techniques.</p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <button onClick={openSearch} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m4-2a8 8 0 11-16 0 8 8 0 0116 0z" />
          </svg>
        </button>
        {isSearchOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSearch}></div>
            <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-[700px] z-50">
              <div className=" p-4 rounded-md shadow-lg relative">
                <button onClick={closeSearch} className="absolute top-0 right-0 -mt-2 p-1 bg-white text-gray-600 rounded-full focus:outline-none">
                  <X className="h-3 w-3" />
                </button>
                <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
                  <Search className="text-gray-600 h-5 w-5 mr-2" />
                  <input type="text" className="w-full focus:outline-none text-black" placeholder="Search..." />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
