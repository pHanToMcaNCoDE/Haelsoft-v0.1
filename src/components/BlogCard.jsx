import React from 'react'
import blg from '/assets/EdTech Platform Logo 2.svg';

const BlogCard = () => {
  return (
    <div className='w-full lg:w-[333px] shadow-lg'>
        <img width={333} height={116} src={blg} className='object-contain' alt="Blog Title" />
        <div className='bg-white p-6 h-[359px] flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-black font-bold text-[1.25rem] leading-8'>Article Title</h1>
                    <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <p className='text-[#767676] text-[.75rem] leading-6 uppercase font-normal'>September 15, 2024</p>
            </div>
            <div>
                <p className='text-[.875rem] leading-7 text-black font-normal w-full lg:w-[251px]'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
                </p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard