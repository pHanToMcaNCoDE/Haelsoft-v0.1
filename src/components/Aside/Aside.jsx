import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import AsideData from './AsideData';
import './style.css';

const Aside = ({ menu }) => {
  const links = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Courses', route: '#' },
    { name: 'Blog', route: '/blogs' },
    { name: 'Corporate', route: '#' },
    { name: 'Careers', route: '/careers' },
    { name: 'Bootcamps', route: '#' }
  ];

  const [click, setClick] = useState('');

  return (
    <aside
      className={`bg-white flex xl:hidden z-40 sticky h-screen top-0 right-0 w-full transition-transform duration-200 ease-in-out ${
        menu ? 'top-[5%]' : 'top-[-100%]'
      }`}
    >
      <div className='w-full h-full flex flex-col justify-start p-[24px] items-start text-[#201A18] font-semibold text-base gap-[25px]'>
        {links.map((link, index) => (
          <Link
            onClick={() => setClick(link.name)}
            to={link.route}
            key={index}
            className='flex justify-between items-center w-full'
          >
            <p className='mb-4 cursor-pointer hover:text-[#F36400]'>{link.name}</p>
            <GoArrowRight className='text-[#201A18] font-semibold text-base' />
          </Link>
        ))}
      </div>
      {(click === 'Courses' || click === 'Corporate' || click === 'Bootcamps') && (
        <AsideData click={click} setClick={setClick} />
      )}
    </aside>
  );
};

export default Aside;
