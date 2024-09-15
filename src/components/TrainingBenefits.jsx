import React from 'react'
import img from '/assets/EdTech Platform (9) 3.svg';
import img2 from '/assets/EdTech Platform (10).svg';
const TrainingBenefits = () => {
  return (
    <section className='max-w-[1200px] 2xl:max-w-[1500px] mx-auto py-[100px] flex flex-col gap-[10em] px-5'>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-[4em]'>
        <img src={img} width={662} height={756} className='w-full lg:w-[462px] xl:w-[662px] object-contain' alt="People Working" />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-[#201A18] text-[.875rem] font-normal leading-5'>COPORATE TRAINING</p>
            <h1 className='text-[#F36400] font-semibold text-[1.875rem] leading-10'>Hire A Ed-Tech Talent</h1>
          </div>
          <p className='text-[1.125rem] leading-[43px] font-normal w-full xl:w-[497px] text-[#655D59]'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec 
          </p>
        </div>
      </div>


      <div className='flex flex-col lg:flex-row justify-between items-center gap-[4em]'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-[#201A18] text-[.875rem] font-normal leading-5'>COPORATE TRAINING</p>
            <h1 className='text-[#F36400] font-semibold text-[1.875rem] leading-10'>Hire A Ed-Tech Talent</h1>
          </div>
          <p className='text-[1.125rem] leading-[43px] font-normal w-full xl:w-[497px] text-[#655D59]'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec 
          </p>
        </div>
        <img src={img2} width={662} height={756} className='w-full lg:w-[462px] xl:w-[662px] object-contain' alt="People Working" />
      </div>

      <div className='border border-[#F36400] 2xl:w-[1265px] mx-auto rounded-lg bg-[#FBFBFB] flex flex-col md:flex-row justify-between items-center md:h-[171px]'>
        <div className='flex justify-center items-center p-8 gap-2 border-b border-b-[#FF8C53] border-r-0 md:border-r md:border-b-0 md:border-r-[#FF8C53]'>
          <h1 className='text-[1.25rem] text-[#F36400] leading-9 font-medium'>35%</h1>
          <p className='text-[1rem] lg:text-[1.25rem] text-[#201A18] leading-9 font-medium'>Increased retention rates</p>
        </div>
        <div className='flex justify-center items-center p-8 gap-2 border-b border-b-[#FF8C53] md:border-r md:border-b-0 md:border-r-[#FF8C53]'>
          <h1 className='text-[1.25rem] text-[#F36400] leading-9 font-medium'>30%</h1>
          <p className='text-[1rem] lg:text-[1.25rem] text-[#201A18] leading-9 font-medium'>Employee productivity</p>
        </div>
        <div className='flex justify-center items-center p-8 gap-2'>
          <h1 className='text-[1.25rem] text-[#F36400] leading-9 font-medium'>10%</h1>
          <p className='text-[1rem] lg:text-[1.25rem] text-[#201A18] leading-9 font-medium'>Reduction in training costs</p>
        </div>
      </div>
    </section>
  )
}

export default TrainingBenefits