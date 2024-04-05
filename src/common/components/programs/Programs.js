import React from 'react'
import * as images from '../../images'
import { CaretRightOutlined } from '@ant-design/icons'
import { Title } from '../title'
import SideTitle from '../sideTitle/SideTitle'

const Programs = () => {

  const swayamBatch = {
    higlights: [
      'Curated Content Available in the form of recorded videos.',
      'Subscription to Coding Library',
      '2000+ Practice Questions.',
      'Learn wide range of technologies like -'
    ],
    content: [
      {
        title: 'Core Java/Advance Java',
        image: images.CoreJavaAdvanceJava,
      },
      {
        title: 'Spring Boot',
        image: images.SpringBoot,
      },
      {
        title: 'AWS Admin,AWS Devops',
        image: images.AWSAdmin,
      },
      {
        title: 'Dot Net',
        image: images.DotNet,
      },
      {
        title: 'Azure Admin | Devops Azure Data Engineer',
        image: images.AzureAdmin,
      },
      {
        title: 'Python,Django,Python Full Stack',
        image: images.Python,
      },
      {
        title: 'SQL',
        image: images.SQL,
      },
      {
        title: 'Power BI',
        image: images.PowerBI,
      },
      {
        title: 'Rest API',
        image: images.RestAPI,
      },
      {
        title: 'React JS',
        image: images.ReactJS,
      },
      {
        title: 'Node JS',
        image: images.NodeJS,
      },
      {
        title: 'Mongo DB',
        image: images.MongoDB,
      },
      {
        title: 'Oracle',
        image: images.Oracle,
      }
    ]
  }

  return (
    <div className="flex flex-col  h-[100rem]">
      <Title title={'Our Programs'} />
    </div>
  )
}

export default Programs