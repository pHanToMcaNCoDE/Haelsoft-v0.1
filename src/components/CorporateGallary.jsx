import React from 'react'
import one from '/assets/EdTech Platform Mask Group.png';
import two from '/assets/EdTech Platform (2) 3.svg';
import three from '/assets/EdTech Platform (5) 2.svg';
import four from '/assets/EdTech Platform (6).svg';
import five from '/assets/EdTech Platform (7).svg';
import six from '/assets/EdTech Platform (9) 2.svg';
import seven from '/assets/EdTech Platform (8).svg';

const CorporateGallary = () => {
  return (
    <section className='flex flex-col gap-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
            <img width={482} height={444} className='object-cover' src={one} alt='Group Image'></img>
            <img width={482} height={444} className='object-cover' src={two} alt='Group Image'></img>
            <img width={482} height={444} className='object-cover' src={three} alt='Group Image'></img>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
            <img width={357} height={399} className='object-cover' src={four} alt='Group Image'></img>
            <img width={357} height={399} className='object-cover' src={five} alt='Group Image'></img>
            <img width={357} height={399} className='object-cover' src={six} alt='Group Image'></img>
            <img width={357} height={399} className='object-cover' src={seven} alt='Group Image'></img>
        </div>
    </section>
  )
}

export default CorporateGallary