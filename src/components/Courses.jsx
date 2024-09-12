import React from 'react'
import online from '../../public/assets/courses.svg'
import CourseCards from './CourseCards'
 
const Courses = () => {
  
  return (
    <section className='pb-[40px] pt-[100px] lg:pb-0 relative min-h-screen 2xl:h-[138vh] overflow-hidden'>
        <div className='flex flex-col justify-center items-center gap-6 px-5 lg:px-8 text-center'>
          <h1 className='text-[#F36400] text-[2.125rem] font-semibold leading-9'>Transformative Online Courses for Future Leaders</h1>
          <p className='w-full lg:w-[879px] text-center text-base text-[#655D59]'>Our online classes are crafted to equip you with essential digital skills. With a select range of expert-led courses, you’ll gain practical knowledge and hands-on experience in a flexible format. Discover our offerings and advance your career with targeted, high-impact learning.</p>
        </div>
        <div className='flex justify-start items-center max-w-[1150px] mx-auto mt-[4em] md:mt-[7em] pb-5 px-10 xl:px-0'>
          <CourseCards/>
          <img width={1350} height={1335} src={online} className='hidden md:flex w-full xl:w-[1300px] xl:h-[1300px] 2xl:w-[1350px] 2xl:h-[1335px] object-contain z-10 absolute right-0' alt="" />
        </div>
    </section>
  )
}

export default Courses