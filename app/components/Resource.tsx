import React from 'react'
import Image from 'next/image'
import tool from '../../public/tool.svg'
import document from '../../public/document.svg'
import right from '../../public/right.svg'


export default function Team() {
  return (
    <div className='text-gray-800 bg-slate-100 w-[375px] h-[1461px] md:w-[768px] md:h-[1039px] lg:w-full lg:h-[731px] flex items-center justify-center flex-col relative md:pb-16 pb-10 pt-8 '>
        <h1 className='text-[26px] font-bold lg:text-[30px] '>
        Latest Resources
       </h1>
        <p className='text-gray-500 text-[12px] lg:text-[18px] md:text-[16px] lg:mt-2 lg:mx-60 md:px-20 text-center px-4'>
        The latest resources includes Transparency Toolkit, Evidence, Best Practices
                </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mt-14 lg:px-36 md:px-8 px-6">
      
      
              <div className="group  flex flex-col gap-4 bg-white rounded-xl h-[320px]">

                <Image height={120} width={120} src={tool} loading="eager" alt="logo" className='mt-6 pl-4'/>                
                <div className='px-4'>
                  <h2 className="text-lg font-semibold">
                    Defence Elvis
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
    

               <div className="group  flex flex-col gap-4 bg-white rounded-xl h-[320px]">

                <Image height={150} width={150} src={document} loading="eager" alt="logo" className='mt-6 pl-4'/>                
                <div className='px-4'>
                <h2 className="text-lg font-semibold">
                    Defence Elvis
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

           <div className="group  flex flex-col gap-4 bg-white rounded-xl h-[320px]">

                <Image height={180} width={180} src={right} loading="eager" alt="logo" className='mt-6 pl-4'/>                
                <div className='px-4'>
                  <h2 className="text-lg font-semibold">
                    Defence Elvis
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

              
           
              </div>
              <div className="flex justify-center mt-8">
        <button className="group rounded-sm w-[160px] py-2 border border-[#1d6ea2] flex items-center justify-center z-20">
          <div>
            <div className="text-[16px] font-semibold">
              View all resources
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
