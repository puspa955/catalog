import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from "react-icons/fi";
import adriana from "../../public/adriana.png";
import karolis from "../../public/karolis.png";
import sandor from "../../public/sandor.png";
import olivia from "../../public/olivia.png";

export default function Check() {
  return (
    <div className='text-gray-800 w-[375px] h-[741px] lg:h-[1200px] md:h-[874px] md:w-[768px] lg:w-full flex flex-col relative lg:px-10'>
      <div className="grid lg:grid-cols-2-1 md:grid-cols-1 md:gap-10 lg:px-12">

        <div className="group flex flex-col gap-4 justify-center px-6 mb-72">
          <h1 className="text-[40px] font-semibold">Who we are</h1>
          <p className="text-[18px] text-gray-500">
            We are a collaboration of Non Govt. and professionals working to ensure that government spending is done fairly, openly, efficiently, and creates the best value for money and best outcomes for Europe. We are working at the national and EU levels to advance the principles of openness in spending of funds, procurement, and company ownership within the EU.
          </p>
          <div>
            <button className='flex items-center justify-center mt-2 cursor-pointer text-[#1d6ea2] rounded-md py-2'>
              <Link href="/auth">
                <span className="flex text-[18px] font-semibold">
                  Start now
                  <span className="text-[20px] pl-1 flex items-center"><FiArrowRight /></span>
                </span>
              </Link>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-10 lg:px-12">
          <div className='mt-20'>
            <div className="overflow-hidden rounded-xl w-[300px]">
              <div className="transform transition-transform hover:scale-110">
                <Image height={300} width={300} src={adriana} loading="eager" alt="Adriana" className="object-cover" />
              </div>
              
            </div>
            <p className='text-[24px] font-semibold py-5'>Adriana Homolova</p>
            <div className="overflow-hidden rounded-xl w-[300px]">
              <div className="transform transition-transform hover:scale-110">
                <Image height={300} width={300} src={karolis} loading="eager" alt="Karolis" className="object-cover" />
              </div>
            </div>
            <p className='text-[24px] font-semibold py-5'>Karolis Ganikack</p>
          </div>
          <div className='mt-40'>
            <div className="overflow-hidden rounded-xl w-[300px]">
              <div className="transform transition-transform hover:scale-110">
                <Image height={300} width={300} src={sandor} loading="eager" alt="Sandor" className="object-cover" />
              </div>
            </div>
            <p className='text-[24px] font-semibold py-5'>Sandor Lerderer</p>
            <div className="overflow-hidden rounded-xl w-[300px]">
              <div className="transform transition-transform hover:scale-105">
                <Image height={300} width={300} src={olivia} loading="eager" alt="Olivia" className="object-cover" />
              </div>
            </div>
            <p className='text-[24px] font-semibold py-5'>Zara Montgomery</p>
          </div>
        </div>

      </div>
    </div>
  );
}
