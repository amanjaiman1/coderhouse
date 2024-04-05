import React, { useState } from 'react'
import { Data, Green, PagesWithNavbar, Title } from '../../common/components'
import { lineBlend, trial } from '../../common/images';
import { excellentInfra, expertMentor, growthOriented } from '../../common/images';
import { message } from 'antd';

const Home = () => {

  const keyFeatures = [
    {
      label: 'Excellent Infrastructure',
      description: 'We have the best infrastructure for our students to learn and grow.',
      logo: excellentInfra
    },
    {
      label: 'Expert Mentor Team',
      description: 'Our faculty members are experts in their respective fields.',
      logo: expertMentor
    },
    {
      label: 'Growth Oriented Environment',
      description: 'We provide placement assistance to all our students.',
      logo: growthOriented
    }
  ]

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    linkedin: ''
  })

  const handleCallback = () => {
    if (userDetails.name === '' || userDetails.email === '' || userDetails.phone === '' || userDetails.program === '' || userDetails.linkedin === '' || userDetails.program === 'Select Program') {
      message.warning('Please fill all the fields');
    } else {
      message.success('Callback Requested Successfully');
      console.log(userDetails);
    }
  }



  return (
    <PagesWithNavbar>
      <div className="flex flex-row h-screen text-4xl w-full sm:h-[39rem] px-12 py-6">
        <div className="flex flex-col items-center w-3/5 px-10 font-semibold">
          <img src={lineBlend} alt="style" className='absolute top-0 -z-10 h-[60rem]' />
          <span className='text-primary cursor-pointer'>
            Crafting Future with Code Mastery
          </span>
          <Title title="Coder House" />
          <img src={trial} alt="style" className='mt-20' />
        </div>
        <div className="flex flex-col w-2/5 px-20">
          <div className="bg-secondary rounded-lg text-white px-8 py-8">
            {/* Form Header */}
            <div className="flex flex-col gap-4">
              <div className='font-semibold'>
                Request for a <Green text={'Callback !'} />
              </div>
              <div className='text-sm font-normal tracking-wide'>
                Someone from our <Green text={'Mentors'} /> will connect with you shortly
              </div>
            </div>
            {/* Form */}
            <div className="flex flex-col text-lg gap-4 mt-8 text-secondary">
              <input type="text" placeholder="Name" className="border p-2 h-12 rounded-lg outline-none" value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} />
              <input type="text" placeholder="Email" className="border p-2 h-12 rounded-lg outline-none" value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              />
              <input type="text" placeholder="Phone" className="border p-2 h-12 rounded-lg outline-none" value={userDetails.phone}
                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
              />

              <select className="border p-2 h-12 rounded-lg text-black outline-none"
                onChange={(e) => setUserDetails({ ...userDetails, program: e.target.value })}
                selected={userDetails.program}
              >
                <option value="Select Program">Select Program</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Machine Learning">Machine Learning</option>
              </select>
              <input type="text" placeholder="Linkedin Profile URL (optional)" className="border p-2 h-12 rounded-lg outline-none" value={userDetails.linkedin}
                onChange={(e) => setUserDetails({ ...userDetails, linkedin: e.target.value })}
              />
            </div>
            {/* Button */}
            <button className="bg-primary text-white text-lg rounded-lg px-4 py-2 mt-8 outline-none" onClick={handleCallback}>Request Callback</button>
          </div>
        </div>
      </div>
      <div className='text-center flex justify-center w-full'>
        <Data />
      </div>
    </PagesWithNavbar>
  )
}

export default Home