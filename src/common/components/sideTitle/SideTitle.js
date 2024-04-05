import React from 'react'

const SideTitle = ({ title }) => {
    const firstTitle = title?.split(':')[0];
    const restTitle = title?.split(':')[1];

    // split firsttitle into two parts
    const firstLen = firstTitle?.split(' ').length;
    const firstTitle1 = firstTitle?.split(' ').slice(0, (firstLen / 2)).join(' ');
    const firstTitle2 = firstTitle?.split(' ').slice((firstLen / 2)).join(' ');

    // split resttitle into two equal parts
    const restLen = restTitle?.split(' ').length;
    const restTitle1 = restTitle?.split(' ').slice(0, (restLen / 2) + 1).join(' ');
    const restTitle2 = restTitle?.split(' ').slice((restLen / 2) + 1).join(' ');

    return (
        <header className='text-4xl mt-8 mb-8 font-medium'>
            <span className='border-b-4 text-secondary border-primary leading-[4rem] sm:leading-3'>
                {firstTitle1} <span className='text-primary border-b-4 border-secondary'>{firstTitle2}</span> : {restTitle1} <span className='text-primary border-b-4 border-secondary'>{restTitle2}</span>
            </span>
        </header>
    )
}

export default SideTitle