import React from 'react';
import vector from '../../../public/assets/vector.svg';
import CoursesData from '../MenuData/CoursesData';
import CorporateData from '../MenuData/CorporateData';
import BootcampsData from '../MenuData/BootcampsData';
import AboutData from '../MenuData/AboutData';

const AsideData = ({ click, setClick }) => {
  return (
    <aside
        className={`flex xl:hidden bg-white p-[25px] sticky h-screen top-[5%] right-0 w-full z-50 transition-transform duration-300 ${
            click === 'Courses' || click === 'Corporate' || click === 'Bootcamps' || click === 'About'
            ? 'translate-x-0 duration-300'
            : '-translate-x-full duration-300'
        }`}
        style={{ backgroundColor: 'white', position: 'fixed', width: '100%', height: '100%' }}
    >
    <img
      className='absolute z-[999] left-[-50%] 2xl:left-[-35%] w-[1200px] h-[700px] bottom-[-80%]'
      src={vector}
      alt="Decorative Vector"
    />
    {/* Render CoursesData when clicked is 'Courses' */}
    {click === 'Courses' && <CoursesData />}
    {click === 'Corporate' && <CorporateData />}
    {click === 'Bootcamps' && <BootcampsData />}
    {click === 'About' && <AboutData />}
    </aside>

  );
};

export default AsideData;
