import * as images from '../images';


const courses = {
    swayamBatch: {
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
}

const plans = [
    {
        title: 'Basic Plan',
        price: 'Rs. 4999',
        actualPrice: 'Rs. 1000',
        benifits: [
            {
                title: 'Full Access to Recorded Videos',
                isAvailable: true
            },
            {
                title: 'Subscription to Coding Library',
                isAvailable: true
            },
            {
                title: '1000+ Practice Questions',
                isAvailable: true
            },
            {
                title: 'Attend Live Sessions',
                isAvailable: false
            },
            {
                title: 'Doubt Clearing Sessions',
                isAvailable: false
            },
            {
                title: 'Mock Interviews',
                isAvailable: false
            },
            {
                title: 'Profile Building',
                isAvailable: false
            },
            {
                title: 'Placement Assistance',
                isAvailable: false
            },
            {
                title: 'Resume Building',
                isAvailable: false
            },
            {
                title: 'Internship Opportunities',
                isAvailable: false
            },
            {
                title: 'Certification',
                isAvailable: false
            },
            {
                title: 'Project Assistance',
                isAvailable: false
            },
            {
                title: 'Mentor Support',
                isAvailable: false
            },
            {
                title: 'Job Assistance',
                isAvailable: false
            },
            {
                title: 'Soft Skill Training',
                isAvailable: false
            }
        ]
    },
    {
        title: 'Standard Plan',
        price: 'Rs. 6999',
        actualPrice: 'Rs. 1500',
        description: 'Curated Content Available in the form of recorded videos.',
        benifits: [
            {
                title: 'Full Access to Recorded Videos',
                isAvailable: true
            },
            {
                title: 'Subscription to Coding Library',
                isAvailable: true
            },
            {
                title: '2000+ Practice Questions',
                isAvailable: true
            },
            {
                title: 'Attend Live Sessions (Any 1)',
                isAvailable: true
            },
            {
                title: 'Doubt Clearing Sessions',
                isAvailable: true
            },
            {
                title: 'Mock Interviews (Limited)',
                isAvailable: true
            },
            {
                title: 'Profile Building',
                isAvailable: true
            },
            {
                title: 'Internship Opportunities',
                isAvailable: true
            },
            {
                title: 'Project Assistance',
                isAvailable: true
            },
            {
                title: 'Mentor Support',
                isAvailable: true
            },
            {
                title: 'Resume Building',
                isAvailable: false
            },
            {
                title: 'Certification',
                isAvailable: false
            },
            {
                title: 'Placement Assistance',
                isAvailable: false
            },
            {
                title: 'Job Assistance',
                isAvailable: false
            },
            {
                title: 'Soft Skill Training',
                isAvailable: false
            }
        ]
    },
    {
        title: 'Premium Plan',
        price: 'Rs. 8999',
        actualPrice: 'Rs. 2500',
        description: 'Curated Content Available in the form of recorded videos.',
        benifits: [
            {
                title: 'Full Access to Recorded Videos',
                isAvailable: true
            },
            {
                title: 'Subscription to Coding Library',
                isAvailable: true
            },
            {
                title: '2000+ Practice Questions',
                isAvailable: true
            },
            {
                title: 'Attend Live Sessions (Any 2)',
                isAvailable: true
            },
            {
                title: 'Doubt Clearing Sessions',
                isAvailable: true
            },
            {
                title: 'Mock Interviews (Unlimited)',
                isAvailable: true
            },
            {
                title: 'Profile Building',
                isAvailable: true
            },
            {
                title: 'Internship Opportunities',
                isAvailable: true
            },
            {
                title: 'Project Assistance',
                isAvailable: true
            },
            {
                title: 'Mentor Support',
                isAvailable: true
            },
            {
                title: 'Resume Building',
                isAvailable: true
            },
            {
                title: 'Certification',
                isAvailable: true
            },
            {
                title: 'Placement Assistance',
                isAvailable: true
            },
            {
                title: 'Job Assistance',
                isAvailable: true
            },
            {
                title: 'Soft Skill Training',
                isAvailable: true
            }
        ]
    }
]

export { courses, plans };