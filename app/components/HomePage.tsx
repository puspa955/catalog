import React from 'react'

function HomePage() {
  return (
    <div className='bg-black z-10 w-[375px] md:w-[768px] h-[440px] lg:h-screen lg:w-full min-h-screen flex items-center justify-center flex-col pt-20'
    style={{
        backgroundImage: 'url("/bg.webp")', // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        }}
      >
        <div className="absolute inset-0 bg-[#002D5BCC] opacity-90"/>
       
       <span className='text-white font-bold text-[42px] lg:text-[56px] md:text-[50px] mt-4 px-1 text-center leading-10 z-20 '>
       Beautiful analytics to grow smarter
        
        </span>
        <p className='text-gray-300 text-[18px] text-center  mt-4 lg:w-[650px] md:w-[650px]  lg:px-1 md:px-2 px-6 z-20'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <button
                className="group rounded-lg px-5 py-3 mt-8 hover:bg-yellow-400/20 border border-yellow-300 bg-yellow-200/20  flex gap-4 items-center z-20"
                >

                <div>
                  <div className=" text-lg font-semibold">
                   Why catalog? {" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non ml-1">
                      -&gt;
                    </span>
                    </div>
                  
                </div>
              </button>

    </div>
  )
}

export default HomePage