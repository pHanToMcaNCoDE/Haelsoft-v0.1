import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import AsideData from './AsideData';
import './style.css';
import secureLocalStorage from 'react-secure-storage';

const Aside = ({ menu, clicked, setClicked }) => {
  const links = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '#' },
    { name: 'Courses', route: '#' },
    { name: 'Blog', route: '/blogs' },
    { name: 'Corporate', route: '#' },
    { name: 'Careers', route: '/careers' },
    { name: 'Bootcamps', route: '#' }
  ];

  const handleClick = (item) => {
    setClicked(item);
    secureLocalStorage.setItem('Title', item);
  };

  return (
    <aside
      className={menu ? 'bg-white flex xl:hidden z-40 sticky h-screen right-0 w-full top-[-100%] duration-300 ease-in-out' : 'bg-white flex xl:hidden z-40 sticky h-screen top-[8%] right-0 w-full duration-300 ease-in-out'}
    >
      <div className='w-full h-full flex flex-col justify-start p-[24px] items-start text-[#201A18] font-semibold text-base gap-[25px]'>
        {links.map((link, index) => (
          <Link
            onClick={() => handleClick(link.name)} // Wrap handleClick inside an arrow function
            to={link.route}
            key={index}
            className='flex justify-between items-center w-full'
          >
            <p className='mb-4 cursor-pointer hover:text-[#F36400]'>{link.name}</p>
            <GoArrowRight className='text-[#201A18] font-semibold text-base' />
          </Link>
        ))}
      </div>
      {(clicked === 'Courses' || clicked === 'Corporate' || clicked === 'Bootcamps' || clicked === 'About') && (
        <AsideData clicked={clicked} setClicked={setClicked} />
      )}
    </aside>
  );
};

export default Aside;
