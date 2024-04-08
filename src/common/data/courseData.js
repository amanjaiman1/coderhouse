import * as images from '../images';


const courses = [
    {
        title: 'Swayam Batch : Self Paced Mastery Course',
        duration: '6 Months',
        key1: '2000+ Practice Questions',
        key2: 'Subscription to Coding Library',
        image: images.MERN,
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
        ],
        category: 'self'
    },
    {
        title: 'Full Stack Web Development Bootcamp',
        duration: '12 Weeks',
        key1: 'Hands-on Projects',
        key2: 'Live Coding Sessions',
        image: images.MERN,
        category: 'live'
    },
    {
        title: 'Data Science Certification Program',
        duration: '9 Months',
        key1: 'Python Programming',
        key2: 'Machine Learning Algorithms',
        image: images.MERN,
        category: 'self'
    },
    {
        title: 'Mobile App Development Course',
        duration: '4 Months',
        key1: 'React Native Framework',
        key2: 'iOS and Android App Development',
        image: images.MERN,
        category: 'live'
    },
    {
        title: 'Cloud Computing Masterclass',
        duration: '6 Weeks',
        key1: 'AWS and Azure Platforms',
        key2: 'Deployment Strategies',
        image: images.MERN,
        category: 'self'
    }
]

const plans = [
    {
        name: 'Basic',
        title: 'Basic Plan',
        price: '₹ 4999',
        actualPrice: '₹ 1000',
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
        name: 'Standard',
        title: 'Standard Plan',
        price: '₹ 6999',
        actualPrice: '₹ 1500',
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
        name: 'Premium',
        title: 'Premium Plan',
        price: '₹ 8999',
        actualPrice: '₹ 2500',
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