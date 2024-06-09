"use client"
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';


export default function Team() {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [agreed, setAgreed] = useState(false); // State for checkbox
  const [Values, setValues] = useState({
    name:'',
    number:'',
    email:'',
    message:'',
  });

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name,value}=e.target;
    setValues({ ...Values,[name]:value});
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleAgreeChange = (isChecked: boolean) => {
    setAgreed(isChecked);
  };

  const submit = async() => {
    
  }

 

  return (
    <div className='text-gray-800 lg:w-[1440px] lg:h-[833px] md:w-[768px] md:h-[833px] w-[375px] h-[903px] flex items-center justify-center flex-col pt-8 '>
      <h1 className='text-[30px] font-bold '>
        Contact Us       
      </h1>
      <p className='text-gray-600 text-[16px] mt-2 lg:mx-60 px-8 lg:w-[700px] text-center'>
      If you have any further inquires, please let us know by filling the form below
            </p>

      <div className='text-gray-800 border shadow-md rounded-md border-transparent flex flex-col lg:px-8 lg:py-8 px- py-8   lg:w-[800px] lg:h-[553px] md:w-[704px] md:h-[553px] mt-8 text-[14px]'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 px-2 md:px-6'>
          <div>
            <h5>First Name</h5>
            <input
             type="text"
             placeholder='Enter your name'
             name='name'
             value={Values.name}
             onChange={change}
             className='text-gray-800 lg:w-[300px] lg:h-[46px] md:w-[308px] w-[200px] h-[46px] mt-1 px-2 outline-none rounded-md border'
             />
            <h5 className='mt-5'>Email address</h5>
            <input type="text" 
             placeholder='Enter your email' 
             name='email'
             value={Values.email}
             onChange={change} 
             className='text-gray-800  lg:w-[630px] lg:h-[46px] md:w-[308px] w-[332px] h-[46px] outline-none rounded-md px-2 mt-1 border'/>
          </div>
          <div>
          <h5>Last Name</h5>
            <input
             type="text"
             placeholder='Enter your last name'
             name='last'
             
             onChange={change}
             className='text-gray-800 lg:w-[300px] lg:h-[46px] md:w-[308px] w-[332px] h-[46px] mt-1 px-2 outline-none rounded-md border'
             />
          </div>
        </div>
        <div className='px-2 md:px-6'>
        <h5 className='mt-4'>Message</h5>
        <textarea 
         placeholder='Hi! We are Catalog...' 
         name='message'
         value={Values.message}
         onChange={change} 
         className='text-black mt-1 px-2 lg:w-[630px] lg:h-[147px] md:w-[640px] md:h-[147px] w-[332px] h-[145px] outline-none rounded-md pt-2 border'/>

       

        {/* Submit button */}
        <div className='flex justify-center'>
        <button onClick={submit} className=" border border-[#1d6ea2] text-black py-1 px-2 rounded mt-4 w-16 h-8">
          Submit
        </button>
        </div>
        </div>
      </div>
    </div>
  )
}
