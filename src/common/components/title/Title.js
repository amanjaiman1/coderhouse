import React from 'react'

const Title = ({ title }) => {
    const firstTitle = title?.split(' ')[0];
    const restTitle = title?.split(' ').slice(1).join(' ');
    return (
        <header header className='text-4xl font-semibold w-full text-center cursor-pointer' >
            <span className='border-b-4 border-primary'>
                {firstTitle} <span className='text-primary border-b-4 border-secondary px-1'>{restTitle}</span>
            </span>
        </header >
    )
}

export default Title