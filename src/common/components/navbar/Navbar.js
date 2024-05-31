import React, { useEffect, useState } from 'react';
import { logo } from '../../images';
import { Green } from '../green';
import navbarSettings from './navbarsettings';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { JoinUsButton } from '../buttons';

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const [isHoverIndex, setIsHoverIndex] = useState(null);
  const [isSticky, setIsSticky] = useState(false); // Track sticky state

  const handleHover = (index) => {
    setIsHover(true);
    setIsHoverIndex(index);
  };

  const handleLeave = () => {
    setIsHover(false);
    setIsHoverIndex(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`w-full max-lg:hidden px-36 bg-secondary h-20 flex fixed top-0 z-50 ${isSticky ? 'shadow-md' : ''}`}>
      <div className="flex flex-row justify-between w-full">
        <div className="logo flex flex-row items-center text-3xl gap-4 font-medium">
          <a href='./'><img src={logo} alt="Logo of Coder House" className='w-[3.5rem] h-[3.5rem]' /></a>
          <Green text={navbarSettings.title} />
        </div>
        <div className="links flex flex-row text-white gap-6 text-lg tracking-wide items-center">
          {navbarSettings?.items?.map((item, index) => {
            if (item?.type === 'Dropdown') {
              return (
                <div className='flex flex-col' key={index} onMouseEnter={() => handleHover(index)} onMouseLeave={handleLeave}>
                  <div className='flex flex-row gap-1 items-center cursor-pointer'>
                    <span>
                      {item.title}
                    </span>
                    <span>
                      <DownOutlined className='w-4 h-4' />
                    </span>
                  </div>
                  <div className={`bg-white rounded-lg ${isHoverIndex === 0 ? 'w-[98.9vw] left-[50%] translate-x-[-50%] translate-y-[-2.5%]' : '-mt-2 flex-col py-1 gap-y-4'} ${isHover && isHoverIndex === index ? 'flex border absolute top-16 opacity-100' : 'hidden opacity-0'} text-secondary duration-700 transition-all`}>
                    {isHover && isHoverIndex === index && (
                      <div>
                        {item?.items?.map((subItem, subIndex) => (
                          <div key={subIndex} className='flex flex-row gap-1 items-center'>
                            {subItem?.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            } else if (item?.type === 'Link') {
              return (
                <Link key={index} to={item?.link} onClick={() => { setIsHover(false); scrollToTop(); }}>{item?.title}</Link>
              );
            }
            return null;
          })}
          <JoinUsButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
