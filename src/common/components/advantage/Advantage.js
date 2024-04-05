import React from 'react'
import { StarOutlined, StarFilled, StarTwoTone, CheckCircleFilled } from '@ant-design/icons'
import { SideTitle } from '../sideTitle'
import { Green } from '../green'

function Advantage({ description }) {
    return (
        <div>
            <header className='py-10'>
                <div className='flex justify-center p-3'>
                    <SideTitle textClass={'text-lg tracking-wide'} title={"What We Offer"} />
                </div>
                <div className='text-5xl flex justify-center'>
                    Key Features of&nbsp;<Green text={"Coder House"} />
                </div>
            </header>
            <div className='w-full flex flex-wrap justify-evenly p-2'>
                {description.map((data, i) => (
                    <div key={i} className=' bg-secondary text-white shadow-lg shadow-gray-500 p-2 m-3 rounded-xl flex flex-col items-center w-4/5 lg:w-3/12 hover:scale-105 duration-700'>
                        <span className='flex justify-center p-2 w-1/2'>
                            <img className='w-screen' src={data.logo} alt="" />
                        </span>

                        <h1 className='font-semibold text-primary text-2xl px-2 pt-2'>{data.label}</h1>

                        <div className='py-4'>
                            {data.description.map((des, index) => (
                                <div key={index} className='px-3 my-3 py-0 text-md tracking-wide flex justify-center'>
                                    <div className='p-1'><CheckCircleFilled className='text-primary' /></div>
                                    <div className='p-1'>{des}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Advantage
