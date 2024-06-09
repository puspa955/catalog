import React from 'react'
import Image from 'next/image'
import data from '../../public/data.png'
import benefit from '../../public/benefit.png'
import eu from '../../public/eu.png'


export default function Team() {
  return (
    <div className='text-gray-800 bg-slate-100 w-[375px] h-[1461px] md:w-[768px] md:h-[1039px] lg:w-full lg:h-[957px] flex items-center justify-center flex-col relative md:pb-16 pb-10 '>
        <h1 className='text-[26px] font-bold lg:text-[30px] '>
            Campaigns
       </h1>
        <p className='text-gray-500 text-[12px] lg:text-[18px] md:text-[16px] lg:mt-2 lg:mx-60 md:px-20 text-center px-4'>
        We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mt-14 lg:px-36 md:px-8 px-6">
      
      
              <div className="group  flex flex-col gap-4 bg-white rounded-xl">

                <Image height={500} width={500} src={data} loading="eager" alt="logo"/>                
                <div className='px-4'>
                  <h2 className="text-l font-semibold">
                    Open Data Directive
                  </h2>
                  <p className=" text-[13px] text-gray-500 gap-4">
                  In view of Russia&apos;s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia&apos;s military action against the Ukrainian people, 
                  </p>
                  
                </div>
                <div
                className="group rounded-lg px-5 py-2 flex gap-4 items-center z-20"
                >

                <div>
                  <button className=" text-sm font-semibold text-[#1d6ea2]">
                   Learn more {" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non ml-1">
                      -&gt;
                    </span>
                    </button>
                  
                </div>
              </div>
              </div>

               {/* Vertical Line */}
    

              <div
                className="group flex gap-4 flex-col bg-white rounded-xl"
               >

                <Image height={500} width={500} src={benefit} loading="eager" alt="logo" />                
                <div className='px-4'>
                  <h2 className="text-l font-semibold">
                    Open Data Directive
                  </h2>
                  <p className=" text-[13px] text-gray-500 gap-4">
                  In view of Russia&apos;s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia&apos;s military action against the Ukrainian people, 
                  </p>
                  
                </div>
                <div
                className="group rounded-lg px-5 py-2 flex gap-4 items-center z-20"
                >

                <div>
                  <button className=" text-sm font-semibold text-[#1d6ea2]">
                   Learn more {" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non ml-1">
                      -&gt;
                    </span>
                    </button>
                  
                </div>
              </div>
              </div>

           <div
                className="group flex flex-col gap-4 bg-white rounded-xl"
               >

                <Image height={500} width={500} src={eu} loading="eager" alt="logo" />                
                <div className='px-4'>
                  <h2 className="text-lg font-semibold">
                    Open Data Directive
                  </h2>
                  <p className=" text-[13px] text-gray-500 gap-4">
                  In view of Russia&apos;s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia&apos;s military action against the Ukrainian people, 
                  </p>
                  
                </div>
                <div
                className="group rounded-lg px-5 py-2 mb-3 flex gap-4 items-center z-20"
                >

                <div>
                  <button className=" text-sm font-semibold text-[#1d6ea2]">
                   Learn more {" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non ml-1">
                      -&gt;
                    </span>
                    </button>
                  
                </div>
              </div>
              </div>

           
              </div>
    </div>
  )
}
