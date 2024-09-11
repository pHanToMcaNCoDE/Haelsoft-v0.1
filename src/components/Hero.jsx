import React from 'react';
import video from '../../public/assets/Student note over wooden desk.mp4';

const Hero = () => {
  return (
    <section className='w-full relative hero'>
      <video autoPlay muted loop playsInline className="hero-video">
        <source src='/assets/Student note over wooden desk.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content px-10 lg:px-8 w-full gap-[2em]">
        <div className='max-w-[1200px] 2xl:max-w-[1530px] mx-auto'>
            <div className='flex flex-col gap-[6em] py-[100px]'>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-[3.5rem] lg:text-[4.313rem] text-left text-[#FFCF00] font-semibold leading-[55px] lg:leading-[75px]'>Innovate. Lead. Succeed.</h1>
                  <p className='text-[1.25rem] leading-6 text-white text-left'>Jumpstart Your Tech Career and Lead the Future</p>
                </div>
                <a href="#get-started" className="py-[15px] px-[24px] border border-[#F36400] bg-[#F36400] text-white font-normal text-[1.125rem] leading-10 h-[48px] w-[181px] flex justify-center items-center gap-2 rounded">Get Started</a>
            </div>
        </div>
      </div>

      <div className='absolute bg-[#D98E47]/70 md:bg-[#D98E47]/[20%] w-full h-screen'></div>
    </section>
  );
};

export default Hero;
