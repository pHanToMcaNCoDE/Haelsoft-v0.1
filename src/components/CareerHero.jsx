import React from 'react'
import img from '/assets/Office Photos 159806.jpg';

const CareerHero = () => {
  return (
    <section className='w -full relative hero h-[70vh] lg:h-[657px]'>
      <img className='absolute' src={img} alt="Join Us" />
      <div className="hero-content px-5 lg:px-8 w-full gap-[2em]">
        <div className='max-w-[1200px] 2xl:max-w-[1530px] mx-auto'>
            <div className='flex flex-col justify-center items-start gap-[6em] py-[100px] w-full'>
                <div className='flex flex-col gap-6 w-full'>
                  <div className='flex flex-col'>
                    <h1 className='text-[3.5rem] lg:text-[4.313rem] text-left text-white font-semibold leading-[55px] lg:leading-[75px] w-full lg:w-[649px]'>
                        Join Us
                        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                    </h1>
                  </div>
                  <p className='text-[1.5rem] leading-7 text-white font-semibold text-left'>Build our career toda</p>
                  <div className='flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-10 w-full'>
                    <button className='w-full md:w-[165px] lg:w-[155px] h-[47px] rounded border border-[#F36400] bg-[#F36400] text-white flex justify-center items-center p-5 lg:p-0'>Open Positions</button>
                    <button className='w-full md:w-[195px] h-[47px] flex justify-center items-center rounded border border-white text-white p-5 lg:p-0'>Teach at Haelsoft</button>
                  </div>
                </div>
            </div>
        </div>
      </div>

      <div className='absolute bg-[#D98E47]/70 md:bg-[#D98E47]/[50%] w-full h-screen'></div>
    </section>
  )
}

export default CareerHero