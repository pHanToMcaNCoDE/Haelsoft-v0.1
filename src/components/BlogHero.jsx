import React from 'react'
import img from '/assets/EdTech Platform (13).svg';

const BlogHero = () => {
  return (
    <section className='w-full hero h-[40vh]'>
      <img width={1440} height={365} className='absolute object-cover' src={img} alt="We are Family" />
    </section>
  )
}

export default BlogHero