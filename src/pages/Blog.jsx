import React from 'react'
import BlogHero from '../components/BlogHero'
import BlogList from '../components/BlogList'

const Blog = () => {
  return (
    <main className='relative'>
      <div className="bg-white shadow-xl absolute top-[10%] left-[150px] py-8 px-5 lg:px-8 w-full md:w-[487px] lg:w-[687px] h-[433px] rounded gap-10 z-40">
        <div className='max-w-[1200px] 2xl:max-w-[1530px] mx-auto'>
          <div className='flex flex-col h-full'>
              <div className='flex flex-col justify-center gap-[3em]'>
                <div className='flex flex-col gap-8'>
                  <p className='text-[#1358DB] underline text-[.75rem] leading-8'>Haelsoft News / Daily</p>
                  <h1 className='text-[1.875rem] lg:text-[2.625rem] text-left text-black font-semibold leading-[55px] lg:leading-[75px] w-full lg:w-[649px]'>Redefining Learning for a Digital World</h1>
                  <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <p className='text-[.75rem] uppercase leading-7 text-[#767676] font-semibold text-left'>September 23, 2024</p>
              </div>
          </div>
        </div>
      </div>
      <BlogHero/>
      <BlogList/>
    </main>
  )
}

export default Blog