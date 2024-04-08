import React, { useEffect, useState } from 'react'
import { logo } from '../../images';
import { Green } from '../green';
import navbarSettings from './navbarsettings';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

const Navbar = () => {

  const [isHover, setIsHover] = useState(false);
  const [isHoverIndex, setIsHoverIndex] = useState(null);



  const handleHover = (index) => {
    setIsHover(true);
    setIsHoverIndex(index);
  }
  const handleLeave = () => {
    setIsHover(false);
    setIsHoverIndex(null);
  }

  useEffect(() => {
    console.log(isHover, isHoverIndex);
  }, [isHover, isHoverIndex])

  return (
    <div className='w-full px-36 bg-secondary h-20 flex'>
      <div className="flex flex-row justify-between w-full">
        <div className="logo flex flex-row items-center text-3xl gap-4 font-medium">
          <img src={logo} alt="Logo of Coder House" className='w-[3.5rem] h-[3.5rem]' />
          <Green text={navbarSettings.title} />
        </div>
        <div className="links flex flex-row text-white gap-6 text-lg tracking-wide items-center">
          {navbarSettings?.items?.map((item, index) => {
            if (item?.type === 'Dropdown') {
              return (
                <div className='flex flex-col' onMouseEnter={() => { handleHover(index) }} onMouseLeave={handleLeave}>
                  <div className='flex flex-row gap-1 items-center cursor-pointer'>
                    <span>
                      {item.title}
                    </span>
                    <span>
                      <DownOutlined className='w-4 h-4' />
                    </span>
                  </div>
                  <div className={`bg-white rounded-lg ${isHoverIndex === 0 ? 'w-[98.9vw] left-[50%] translate-x-[-50%]' : '-mt-2 flex-col py-1 gap-y-4'} ${isHover && isHoverIndex === index ? 'flex border absolute top-16 opacity-100' : 'hidden opacity-0'} text-secondary duration-700 transition-all`}>
                    {isHover && isHoverIndex === index && (
                      <div>
                        {item?.items?.map((subItem, subIndex) => {
                          return (
                            <div className='flex flex-row gap-1 items-center'>
                              {subItem?.label}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )
            }
            else if (item?.type === 'Link') {
              return (
                <Link to={item?.link}>{item?.title}</Link>
              )
            }
            else if (item?.type === 'Button') {
              return (
                <button key={index} className='text-secondary bg-primary rounded font-semibold text-lg px-4'>{item?.title}</button>
              )
            }
            return null;
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar