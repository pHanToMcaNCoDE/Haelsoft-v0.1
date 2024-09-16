import React, { useState, useEffect } from 'react';
import logo from '../../public/assets/logo.svg';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Navbar = ({ clicked, setClicked }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCoursesClick = (e) => {
    e.stopPropagation();
    setClicked((prev) => !prev);
  };

  const links = [
    { name: 'Home', link: '/' },
    { name: 'Courses', link: '' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Corporate', link: '' },
    { name: 'Careers', link: '/careers' }
  ];

  return (
    <>
      <CSSTransition
        in={clicked}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Menu />
      </CSSTransition>

      <nav
        className={`navbar fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-[#4c4f5f]/30'
        }`}
      >
        <div className="container flex justify-between items-center p-2 max-w-[1200px] 2xl:max-w-[1500px] mx-auto">
          <img width={100} height={100} className="object-cover" src={logo} alt="Logo" />

          <ul
            className={`flex justify-between items-center gap-8 text-[1.125rem] font-normal leading-8 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            {links.map((item, index) => (
              <li key={index} className="group relative">
                <span
                  onClick={item.name === 'Courses' ? handleCoursesClick : undefined}
                  className="cursor-pointer"
                >
                  {item.name === 'Courses' || item.name === 'Corporate' ? (
                    <div className="flex items-center gap-1">
                      <Link to={item.link}>
                        {item.name}
                      </Link>
                      <MdOutlineKeyboardArrowDown
                        className={
                          clicked ? 'rotate-180 duration-200' : 'rotate-0 duration-200'
                        }
                      />
                    </div>
                  ) : (
                    <Link to={item.link}>
                      {item.name}
                    </Link>
                  )}
                </span>
                <span className="absolute left-0 right-0 bottom-[-13px] h-[5px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </li>
            ))}
          </ul>

          <button
            className={`flex justify-center items-center w-[150px] h-[43px] rounded transition-colors duration-300 ${
              isScrolled ? 'bg-[#F36400] border border-[#F36400] text-white' : 'bg-[#F36400] border border-[#F36400] text-white'
            }`}
          >
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
