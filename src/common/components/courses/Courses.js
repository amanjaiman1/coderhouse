import React from 'react';
import { Tabs } from 'antd';
import { courses } from '../../data/courseData';
import { CheckOutlined, ClockCircleFilled, VideoCameraFilled } from '@ant-design/icons';


const Courses = ({ isNavbar }) => {

    const download = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4' fill='#9de045'>
        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </svg>

    const Course = ({ course }) => {
        return (
            <div className={`flex flex-col gap-4 border rounded-2xl w-96 cursor-pointer hover:scale-105 duration-700 ${isNavbar ? 'pt-3' : 'pt-0'}`}>
                {!isNavbar && <img src={course.image} alt="" className='rounded-t-2xl' />}
                <div className="flex flex-col px-4">
                    <div className="text-xl font-semibold">{course.title}</div>
                    <div className={`flex flex-col px-2 gap-2 ${isNavbar ? 'py-4' : 'py-6'}`}>
                        <div className="text-lg font-normal flex gap-2"><CheckOutlined className='text-primary' />{course.duration}</div>
                        {!isNavbar && <div className="text-lg font-normal flex gap-2"><ClockCircleFilled className='text-primary' />{course.key1}</div>}
                        <div className="text-lg font-normal flex gap-2"><VideoCameraFilled className='text-primary' />{course.key2}</div>
                    </div>
                </div>
                {!isNavbar && <div className="flex flex-row w-full border-t border-0 text-lg font-medium">
                    <button className='flex flex-row w-1/2 gap-1.5 rounded-l-2xl rounded-t-none items-center justify-center bg-secondary text-primary py-2'>{download}Brochure</button>
                    <button className='flex flex-row w-1/2 rounded-r-2xl rounded-t-[0px_1rem] items-center justify-center bg-primary py-2'>View Program</button>
                </div>}
            </div>
        )
    }

    const CoursesByCategory = ({ category }) => {
        // filter courses by category
        if (category === 'All') {
            return (
                <div className="flex flex-row flex-wrap gap-8">
                    {courses.map((course, index) => (
                        <Course key={index} course={course} />
                    ))}
                </div>
            )
        }
        const course = courses.filter(course => course.category === category);
        return (
            <div className="flex flex-row flex-wrap gap-8">
                {course.map((course, index) => (
                    <Course key={index} course={course} />
                ))}
            </div>
        )
    }

    const item = [
        {
            label: 'All',
            key: '1',
            children: <CoursesByCategory category={'All'} />
        },
        {
            label: 'Self Paced',
            key: '2',
            children: <CoursesByCategory category={'self'} />
        },
        {
            label: 'Live Classes',
            key: '3',
            children: <CoursesByCategory category={'live'} />
        }
    ]


    return (
        <div className="flex flex-col">
            <div className='px-24 py-12 text-5xl'>
                <Tabs
                    tabPosition={'left'}
                    items={item}
                />
            </div>
        </div>
    )
}

export default Courses