import React from 'react'

import one from '/assets/img-list/one.svg';
import two from '/assets/img-list/two.svg';
import three from '/assets/img-list/three.svg';
import four from '/assets/img-list/four.svg';
import five from '/assets/img-list/five.svg';
import six from '/assets/img-list/six.svg';
import seven from '/assets/img-list/seven.svg';

const Gall = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-1 w-full'>
            <img width={482} height={444} className='object-cover' src={one} alt="Learning" />
            <img width={482} height={444} className='object-cover' src={two} alt="Learning" />
            <img width={482} height={444} className='object-cover' src={three} alt="Learning" />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-1 w-full'>
            <img src={four} alt="Learning" />
            <img src={five} alt="Learning" />
            <img src={six} alt="Learning" />
            <img src={seven} alt="Learning" />
        </div>
    </div>
  )
}

export default Gall