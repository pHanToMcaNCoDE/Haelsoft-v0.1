import React from 'react'

const GetStarted = () => {
  return (
    <section className='w-full min-h-screen bg-[#F36400]'>
      <div className='max-w-[1250px] mx-auto px-5 py-[100px] flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4'>
          <div className='w-full md:w-[40%] xl:w-[50%] md:h-[663px] flex flex-col gap-6'>
              <h1 className='text-[1.75rem] text-white leading-[43px] font-semibold text-center md:text-left'>Ready to Get Started?</h1>
              <p className='w-full xl:w-[523px] text-white font-normal leading-[43px] text-center md:text-left text-[1.3rem]'>
                  We&apos;re excited to help you take the next step in your learning journey. Our team is here to support you and answer any questions you might have.
              </p>
          </div>
          <div className='w-full flex justify-center items-center md:w-[60%] xl:w-[50%]'>
              <div className='bg-[#FBFBFB] flex flex-col justify-center items-center rounded w-full relative lg:w-[626px] h-[660px] gap-4 p-[20px] md:p-[25px] lg:p-[50px]'>
                  <div className='bg-[#F36400] absolute top-3 left-0 w-full lg:w-[625px] rounded-lg h-[6px]'></div>
                  <h1 className='leading-[43px] text-[#F36400] font-semibold text-[1.75rem] text-center xl:text-left w-full'>Book a Consultation for Free</h1>
                  <p className='text-[#655D59] font-normal text-[1rem] leading-[24px] w-full xl:w-[297px] text-center xl:text-left'>
                      Kindly fill in the form to get started.
                  </p>
                  <div className='bg-[#F0F0F0B2] h-[463px] w-full lg:w-[564px] flex flex-col justify-center items-center gap-[4em] p-6'>
                      <div className='flex flex-col justify-center items-start gap-10 w-full'>
                          <input className='w-full lg:w-[482px] h-[48px] rounded py-[15px] px-[20px] gap-[10px] bg-white placeholder:text-[#655D5980] placeholder:text-[.75rem] font-normal placeholder:font-normal placeholder:leading-[18px] text-base outline-none border-none' type="text" name="" id="" placeholder='Name' />
                          <input className='w-full lg:w-[482px] h-[48px] rounded py-[15px] px-[20px] gap-[10px] bg-white placeholder:text-[#655D5980] placeholder:text-[.75rem] font-normal placeholder:font-normal placeholder:leading-[18px] text-base outline-none border-none' type="text" name="" id="" placeholder='Email Address' />
                          <input className='w-full lg:w-[482px] h-[48px] rounded py-[15px] px-[20px] gap-[10px] bg-white placeholder:text-[#655D5980] placeholder:text-[.75rem] font-normal placeholder:font-normal placeholder:leading-[18px] text-base outline-none border-none' type="text" name="" id="" placeholder='Phone Number' />
                      </div>
                      <button className='bg-[#F36400] gap-[10px] p-[10px] w-full md:w-[298px] rounded flex justify-center items-center h-[58px] text-white' type="submit">Request Consultation</button>
                  </div>
                  <div className='bg-[#F36400] absolute bottom-3 left-0 w-full lg:w-[625px] rounded-lg h-[6px]'></div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default GetStarted