import React, { useState, useEffect } from 'react';
import logo from '../../public/assets/logo.svg';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Menu from './MenuData/Menu';
import Aside from './Aside/Aside';

const Navbar = ({ clicked, setClicked }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

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

  const handleCoursesClick = (name) => {
    setClicked(name);
  };

  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Courses', link: '#' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Corporate', link: '#' },
    { name: 'Careers', link: '/careers' },
    { name: 'Bootcamps', link: '#' }
  ];

  return (
    <>


      <nav
        className='navbar block xl:hidden fixed top-0 left-0 w-full z-[9999] transition-all duration-300 bg-white border-b-[2px] border-b-[#EEEEEEEE]'
      >
        <div className="container flex justify-between items-center p-2 max-w-[1200px] 2xl:max-w-[1500px] mx-auto">
          <img width={100} height={100} className="object-cover" src={logo} alt="Logo" />

          <ul
            className={`hidden xl:flex justify-between items-center gap-8 text-[1.125rem] font-normal leading-8 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            {links.map((item, index) => (
              <li key={index} className="group relative">
                <span
                  onClick={item.link ? () => setClicked(item.name) : undefined}
                  className="cursor-pointer"
                >
                  {item.name === 'Courses' || item.name === 'Corporate' || item.name === 'Bootcamps' ? (
                    <div className="flex items-center gap-1">
                      <Link to={item.link} onClick={() => handleCoursesClick(item.name)}>
                        {item.name}
                      </Link>
                      <MdOutlineKeyboardArrowDown
                        className={
                          clicked === item.name ? 'rotate-180 duration-200' : 'rotate-0 duration-200'
                        }
                      />
                    </div>
                  ) : (
                    <Link to={item.link} onClick={() => handleCoursesClick(item.name)}>
                      {item.name}
                    </Link>
                  )}
                </span>
                <span className="absolute left-0 right-0 bottom-[-13px] h-[5px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </li>
            ))}
          </ul>

          <button
            className={`hidden xl:flex justify-center items-center w-[150px] h-[43px] rounded transition-colors duration-300 ${
              isScrolled ? 'bg-[#F36400] border border-[#F36400] text-white' : 'bg-[#F36400] border border-[#F36400] text-white'
            }`}
          >
            Sign In
          </button>

          <div onClick={() => setMenu(prev => !prev)} className='flex xl:hidden flex-col justify-center items-center gap-1 w-[4%]'>
            <div className='w-[50%] h-[2px] rounded bg-black'></div>
            <div className='w-[50%] h-[2px] rounded bg-black'></div>
            <div className='w-[50%] h-[2px] rounded bg-black'></div>
          </div>
        </div>
        {
          menu && (<Aside menu={menu} clicked={clicked} setClicked={setClicked}/>)
        }
        <CSSTransition
          in={clicked === 'Courses' || clicked === 'Corporate' || clicked === 'Bootcamps'}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Menu clicked={clicked} setClicked={setClicked} />
        </CSSTransition>
      </nav>

      <nav
        className={`hidden xl:flex navbar fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-[#4c4f5f]/30'
        }`}
      >
        <div className="container flex justify-between items-center p-2 max-w-[1200px] 2xl:max-w-[1500px] mx-auto">
          <img width={100} height={100} className="object-cover" src={logo} alt="Logo" />

          <ul
            className={`hidden xl:flex justify-between items-center gap-8 text-[1.125rem] font-normal leading-8 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            {links.map((item, index) => (
              <li key={index} className="group relative">
                <span
                  onClick={item.link ? () => setClicked(item.name) : undefined}
                  className="cursor-pointer"
                >
                  {item.name === 'Courses' || item.name === 'Corporate' || item.name === 'Bootcamps' || item.name === 'About' ? (
                    <div className="flex items-center gap-1">
                      <Link to={item.link} onClick={() => handleCoursesClick(item.name)}>
                        {item.name}
                      </Link>
                      <MdOutlineKeyboardArrowDown
                        className={
                          clicked === item.name ? 'rotate-180 duration-200' : 'rotate-0 duration-200'
                        }
                      />
                    </div>
                  ) : (
                    <Link to={item.link} onClick={() => handleCoursesClick(item.name)}>
                      {item.name}
                    </Link>
                  )}
                </span>
                <span className="absolute left-0 right-0 bottom-[-13px] h-[5px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </li>
            ))}
          </ul>

          <button
            className={`hidden xl:flex justify-center items-center w-[150px] h-[43px] rounded transition-colors duration-300 ${
              isScrolled ? 'bg-[#F36400] border border-[#F36400] text-white' : 'bg-[#F36400] border border-[#F36400] text-white'
            }`}
          >
            Sign In
          </button>

          <div onClick={() => setMenu(prev => !prev)} className='flex xl:hidden flex-col justify-center items-center gap-1 w-[4%]'>
            <div className='w-[50%] h-[2px] rounded bg-black'></div>
            <div className='w-[50%] h-[2px] rounded bg-black'></div>
            <div className='w-[50%] h-[2px] rounded bg-black'></div>
          </div>
        </div>
        {
          menu && (<Aside menu={menu} clicked={clicked} setClicked={setClicked}/>)
        }
        <CSSTransition
          in={clicked === 'Courses' || clicked === 'Corporate' || clicked === 'Bootcamps'}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Menu clicked={clicked} setClicked={setClicked} />
        </CSSTransition>
      </nav>
    </>
  );
};

export default Navbar;
