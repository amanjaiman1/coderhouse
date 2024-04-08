import React from 'react'
import { Green } from '../green'
import { Carousel } from 'antd';
import mentors from './mentorsData';
import { Linkedin } from '../../images';


const Mentors = () => {
  return (
    <div className="flex flex-col items-center justify-center px-28 ">
      <div className="text-4xl leading-[3.4rem] text-center font-semibold px-[7.5rem]">
        We have Industry Experts as <Green text={'Mentor'} /> who guide you with <Green text={'Career Planning'} /> & <Green text={'Interview'} /> Preparation
      </div>
      <div className='text-black w-full'>
        <Carousel autoplay slidesToShow={4}>
          {mentors.map((mentor, index) => (
            <div key={index} className="p-4 h-full">
              <div className="flex flex-col hover:scale-105 duration-700 w-full items-center justify-center rounded shadow">
                <img src={mentor.pic} alt={mentor.name} className="w-full" />
                <div className="flex flex-row justify-between w-full px-6 pt-3">
                  <div className='text-lg font-semibold'>{mentor.name}</div>
                  <a href={mentor.linkedin} target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="Linkedin" className='w-6' />
                  </a>
                </div>
                <div className="flex flex-row justify-start w-full px-6 pt-2 text-xl">
                  <div>{mentor.position}</div>
                </div>
                <div className="flex flex-row justify-end w-full px-2 pt-2 pb-4">
                  <img src={mentor.companyLogo} alt="Company Logo" className='w-24' />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Mentors