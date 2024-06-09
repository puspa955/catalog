"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Team() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news data from the API endpoint
    fetch('https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched news data:', data.news);
        setNews(data.news.slice(0, 6)); // Get only the first 6 news articles
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className='text-gray-800 w-[375px] h-[1461px] md:w-[768px] md:h-[1039px] lg:w-full lg:h-[1500px] flex items-center justify-center flex-col relative md:pb-16 pb-10'>
      <h1 className='text-[26px] font-bold lg:text-[30px]'>News</h1>
      <p className='text-gray-500 text-[12px] lg:text-[18px] md:text-[16px] lg:mt-2 lg:mx-60 md:px-20 text-center px-4'>
        We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 mt-14 lg:px-36 md:px-8 px-6">
        {Array.isArray(news) && news.length > 0 ? (
          news.map((article, index) => (
            <div key={index} className="group flex flex-col gap-4 bg-slate-100 rounded-xl">
              <div className='relative w-full h-[200px]'>
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-t-xl" 
                  unoptimized // add this line to avoid potential issues with Next.js optimization
                />
              </div>
              <div className='px-4'>
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p className="text-[13px] text-gray-500 gap-4">{article.content}</p>
              </div>
              <div className="group rounded-lg px-5 py-2 flex gap-4 items-center z-20">
                <div>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#1d6ea2]">
                    Learn more {' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-non ml-1">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-8">
        <button className="group rounded-sm w-[140px] py-2 border border-[#1d6ea2] flex items-center justify-center z-20">
          <div>
            <div className="text-[16px] font-semibold">
              View all news
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
