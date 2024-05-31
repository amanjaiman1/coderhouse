import React from 'react'
import { PagesWithNavbar } from '../../common/components'

const Notes = () => {
  return (
    <PagesWithNavbar>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className=' text-[40px] overline'>Here are your Notes !</h1>
      </div>
    </PagesWithNavbar>
  )
}

export default Notes