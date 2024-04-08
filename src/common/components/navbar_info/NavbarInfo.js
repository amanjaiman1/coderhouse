import React from 'react'
import navbarSettings from '../navbar/navbarsettings'
import { Link } from 'react-router-dom';

const NavbarInfo = () => {

    let companyName = [];
    let role = [];

    navbarSettings.internships.forEach((data) => {
        companyName.push(data.companyName);
        // check if role already exists in the array
        if (!role.includes(data.role)) {
            role.push(data.role);
        }
    })


    return (
        <div className="flex flex-row w-full items-center justify-center bg-primary text-secondary text-lg py-1">
            <Link className='text-blue-500 underline' to='/jobs_internship'>Click Here</Link>&nbsp;to check Internship Opportunities at&nbsp;<span className="underline">{companyName[0]} , {companyName[1]}</span>&nbsp;and many more companies for different roles.
        </div>
    )
}

export default NavbarInfo