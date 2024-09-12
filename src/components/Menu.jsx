import React from 'react'
import vector from '../../public/assets/vector.svg'

const Menu = () => {

    // className={` ${
    //     clicked ? 'opacity-100' : 'opacity-0'
    //   } ${clicked ? 'visible' : 'invisible'} fixed top-[6.5%] w-full bg-white shadow-xl shadow-zinc-200 z-50 p-10`}
    //   style={{
    //     transition: 'visibility 0s linear 0.3s, opacity 0.3s ease-in-out',
    //   }}
  return (
    <nav className='overflow-hidden h-[432px] w-full shadow-xl shadow-zinc-200 bg-white fixed top-[6.55%] p-10 z-50 opacity-100 flex'>
      <img className='absolute z-[999] left-[-50%] 2xl:left-[-35%] w-[1200px] h-[700px] bottom-[-80%]' src={vector} alt="" />
        <div className='flex justify-center items-center gap-[4em] h-full max-w-[1500px] mx-auto'>
            <div className='h-full flex flex-col justify-start items-start gap-5'>
                <h1 className='text-[1.625rem] leading-9 font-semibold text-black'>Certificate Courses</h1>
                <p className='text-[.875rem] leading-[18px] font-normal text-[#655D59] w-full md:w-[398px]'>
                    Master a new digital skill with our flexible, part-time certificate programs, available online. Designed to fit your schedule, these courses range from 5 to 10 weeks, offering hands-on learning to help you advance your career.
                </p>
            </div>
            <div className='grid grid-cols-3 justify-items-start gap-4 h-full'>
                <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <h1 className='text-base font-semibold text-black'>Development</h1>
                    <ul className='flex flex-col justify-start items-start gap-3'>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                            Frontend Development
                        </li>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                            Backend Development
                        </li>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                            Full-Stack Development
                        </li>
                        {/* <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                            Block-Chain Development
                        </li> */}
                    </ul>
                </div>
                <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <h1 className='text-base font-semibold text-black'>Data + AI</h1>
                    <ul className='flex flex-col justify-start items-start gap-3'>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Data Analytics</li>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Data Science</li>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Artificial Intelligence</li>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Python</li>
                    </ul>
                </div>
                <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <h1 className='text-base font-semibold text-black'>Design</h1>
                    <ul className='flex flex-col justify-start items-start gap-3'>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>UI Design</li>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>UX Design</li>
                    </ul>
                </div>
                <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <h1 className='text-base font-semibold text-black'>Digital Marketing</h1>
                    <ul className='flex flex-col justify-start items-start gap-3'>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Digital Marketing</li>
                    </ul>
                </div>
                <div className='w-full flex flex-col justify-start items-start gap-3'>
                    <h1 className='text-base font-semibold text-black'>Search Engine Optimization</h1>
                    <ul className='flex flex-col justify-start items-start gap-3'>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>SEO Fundamentals</li>
                        <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Advance SEO Concepts</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Menu