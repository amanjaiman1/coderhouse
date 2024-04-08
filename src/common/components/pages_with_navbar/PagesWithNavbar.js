import React from 'react'
import { Navbar } from '../navbar'
import { NavbarInfo } from '../navbar_info'

const PageWithNavbar = ({ children }) => {
    return (
        <div className='w-full'>
            <div className='w-full'>
                <Navbar />
                <NavbarInfo />
            </div>
            <div className='pt-16'>
                {children}
            </div>
        </div>
    )
}

export default PageWithNavbar
