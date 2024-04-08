import { Link } from 'react-router-dom'
import { Courses } from '../courses'

const navbarSettings = {
    title: 'Coder House',
    items: [
        {
            title: 'Courses',
            type: 'Dropdown',
            items: [
                {
                    key: '1',
                    label: <Courses isNavbar={true} />,
                }
            ]
        },
        {
            title: 'Campus Programs',
            type: 'Dropdown',
            items: [
                {
                    key: '1',
                    label: (
                        <div className='border-b-[1px] border-dashed border-opacity-20 border-secondary w-full px-3 pb-1'>
                            <Link to='/' className='hover:text-primary'>College Programs</Link>
                        </div>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <div className='w-full px-3 pt-1'>
                            <Link to='/' className='hover:text-primary'>On-Campus Program</Link>
                        </div>
                    ),
                },
            ]
        },
        {
            title: 'Notes',
            type: 'Link',
            link: '/'
        },
        {
            title: 'Contact Us',
            type: 'Link',
            link: '/'
        },
        {
            title: 'More',
            type: 'Dropdown',
            items: [
                {
                    key: '1',
                    label: (
                        <div className='border-b-[1px] border-dashed border-opacity-20 border-secondary w-full px-3 pb-1'>
                            <Link to='/' className='hover:text-primary'>Blogs</Link>
                        </div>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <div className='w-full px-3 pt-1'>
                            <Link to='/' className='hover:text-primary'>Hire From Us</Link>
                        </div>
                    ),
                },
            ]
        },
        {
            title: 'Join Us',
            type: 'Button',
        }
    ],
    internships: [
        {
            companyName: 'Google',
            role: 'Software Developer',
            location: 'Bangalore, India',
            stipend: 'INR 50000',
            duration: '6 months',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Microsoft',
            role: 'Software Developer',
            location: 'Bangalore, India',
            stipend: 'INR 50000',
            duration: '6 months',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Amazon',
            role: 'Software Developer',
            location: 'Bangalore, India',
            stipend: 'INR 50000',
            duration: '6 months',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Facebook',
            role: 'Software Developer',
            location: 'Bangalore, India',
            stipend: 'INR 50000',
            duration: '6 months',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Twitter',
            role: 'Software Developer',
            location: 'Bangalore, India',
            stipend: 'INR 50000',
            duration: '6 months',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'LinkedIn',
            role: 'Software Developer',
            location: 'Bangalore, India',
            stipend: 'INR 50000',
            duration: '6 months',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Snapchat',
            role: 'Software Developer',
            location: 'Bangalore, India',
            stipend: 'INR 50000',
            duration: '6 months',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Instagram',
            role: 'Software Developer',
            location: 'Bangalore, India',
            stipend: 'INR 50000',
            duration: '6 months',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'TikTok',
            role: 'Software Developer',
            location: 'Bangalore, India',
            stipend: 'INR 50000',
            duration: '6 months',
            applyBy: '12th October 2021',
            link: '/'
        }
    ],
    jobs: [
        {
            companyName: 'Google',
            role: 'Software Developer',
            location: 'Bangalore, India',
            salary: 'INR 50000',
            experience: '2 years',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Microsoft',
            role: 'Software Developer',
            location: 'Bangalore, India',
            salary: 'INR 50000',
            experience: '2 years',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Amazon',
            role: 'Software Developer',
            location: 'Bangalore, India',
            salary: 'INR 50000',
            experience: '2 years',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Facebook',
            role: 'Software Developer',
            location: 'Bangalore, India',
            salary: 'INR 50000',
            experience: '2 years',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Twitter',
            role: 'Software Developer',
            location: 'Bangalore, India',
            salary: 'INR 50000',
            experience: '2 years',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'LinkedIn',
            role: 'Software Developer',
            location: 'Bangalore, India',
            salary: 'INR 50000',
            experience: '2 years',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Snapchat',
            role: 'Software Developer',
            location: 'Bangalore, India',
            salary: 'INR 50000',
            experience: '2 years',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'Instagram',
            role: 'Software Developer',
            location: 'Bangalore, India',
            salary: 'INR 50000',
            experience: '2 years',
            applyBy: '12th October 2021',
            link: '/'
        },
        {
            companyName: 'TikTok',
            role: 'Software Developer',
            location: 'Bangalore, India',
            salary: 'INR 50000',
            experience: '2 years',
            applyBy: '12th October 2021',
            link: '/'
        }
    ]
}

export default navbarSettings;