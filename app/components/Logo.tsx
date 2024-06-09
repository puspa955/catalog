"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import layers from '../../public/layers.svg';
import quotient from '../../public/quotient.svg';
import hour from '../../public/hour.svg';
import circooles from '../../public/circooles.svg';
import sis from '../../public/sis.svg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function HomePage() {
  const images = [layers, quotient, hour, circooles, sis];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const reorderedImages = [...images.slice(currentIndex + 1), ...images.slice(0, currentIndex + 1)];
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    return reorderedImages;
  };

  const prevSlide = () => {
    const reorderedImages = [...images.slice(-1), ...images.slice(0, -1)];
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    return reorderedImages;
  };

  return (
    <div className='bg-slate-100 z-10 w-[375px] h-[416px] lg:h-[200px] lg:w-full md:h-[176px] md:w-[768px] flex items-center justify-center md:flex-col flex-col lg:flex-row lg:gap-16'>
      <ChevronLeft className='text-gray-800 cursor-pointer' onClick={() => prevSlide()} />
      <div className='flex lg:flex-row md:flex-row flex-col items-center gap-20'>
        {images.map((image, index) => (
          <Image
            key={index}
            height={130}
            width={130}
            src={images[(index + currentIndex) % images.length]}
            loading='eager'
            alt='logo'
          />
        ))}
      </div>
      <ChevronRight className='text-gray-800 cursor-pointer' onClick={() => nextSlide()} />
    </div>
  );
}

export default HomePage;
