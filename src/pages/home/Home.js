import React from 'react'
import { PagesWithNavbar, Programs, Title } from '../../common/components'
import Lottie from 'lottie-react';
import { lineBlend } from '../../common/images';
import { excellentInfra, expertMentor, growthOriented } from '../../common/images';
import Advantage from '../../common/components/advantage/Advantage';
const Home = () => {

  const keyFeatures = [
    {
      label: 'Excellent Infrastructure',
      description: [
      "We have the best infrastructure for our students to learn and grow.",
      "We have the best infrastructure for our students to learn and grow.",
      "We have the best infrastructure for our students to learn and grow.",
      "We have the best infrastructure for our students to learn and grow."
    ],
      logo: excellentInfra
    },
    {
      label: 'Expert Mentor Team',
      description: [
        'Our faculty members are experts in their respective fields.',
        'Our faculty members are experts in their respective fields.',
        'Our faculty members are experts in their respective fields.',
        'Our faculty members are experts in their respective fields.'
      ],
      logo: expertMentor
    },
    {
      label: 'Growth Oriented Environment',
      description: [
        'We provide placement assistance to all our students.',
        'We provide placement assistance to all our students.',
        'We provide placement assistance to all our students.',
        'We provide placement assistance to all our students.'
      ],
      logo: growthOriented
    }
  ]

  return (
    <PagesWithNavbar>
      <div className="flex flex-row h-screen bg-secondary text-primary text-4xl w-full">
        <div className="flex w-3/4 font-semibold">
          Crafting Future with Code Mastery
        </div>
      </div>
      <Advantage description={keyFeatures}/>
    </PagesWithNavbar>
  )
}

export default Home