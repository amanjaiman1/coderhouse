import React from 'react'
import { PagesWithNavbar } from '../../common/components'
import { notes } from '../../common/data/courseData'

const Notes = () => {
  const openFile = (url) => {
    window.open(url, '_blank');
  };

  return (
    <PagesWithNavbar>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className=' text-[40px] overline'>Here are your Notes !</h1>
        <div className="flex flex-wrap justify-center w-full pt-12 px-14">
          {notes.map((note, index) => (
            <div className='w-[calc(25%-10px)] m-6 border bg-secondary text-primary rounded-2xl hover:scale-105 duration-700' key={index}>
              <div className="flex flex-col items-center gap-1 pt-2">
                <span className='text-2xl font-semibold'>{note.name}</span>
                <div className="flex flex-col gap-2 py-4">
                </div>
                <div className="flex flex-row w-full border-t border-0 text-lg font-medium bg-black">
                  <a
                    href={note.file}
                    download
                    className='flex flex-row w-1/2 gap-1.5 rounded-l-2xl rounded-t-none items-center justify-center py-2'
                  >
                    Download
                  </a>
                  <button
                    className='flex flex-row w-1/2 rounded-r-2xl rounded-t-[0px_1rem] items-center justify-center text-white border-l py-2'
                    onClick={() => openFile(note.file)}
                  >
                    View Only
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PagesWithNavbar>
  )
}

export default Notes
