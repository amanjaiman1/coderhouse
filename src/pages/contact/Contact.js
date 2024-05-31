import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PageWithNavbar from '../../common/components/pages_with_navbar/PagesWithNavbar';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);

    emailjs.sendForm(
      'service_xjk053e',
      'template_26hjic3',
      form,
      'bJBVpgo6aMs-B4M5a'
    ).then((response) => {
      setLoading(false);
      alert('Your message has been sent successfully!');
      form.reset();
    }).catch((error) => {
      setLoading(false);
      alert('Failed to send the message. Please try again.');
    });
  };

  return (
    <PageWithNavbar>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Contact Us</h2>
          <form className="space-y-6" onSubmit={onFinish}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input id="name" name="name" type="text" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <div className="mt-1">
                <input id="phone" name="phone" type="tel" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <div className="mt-1">
                <textarea id="message" name="message" rows="4" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
        <h2 className=' text-[#51d05e] text-bold text-center text-[40px] mt-10'>Need Help ?</h2>
        <p className='text-[50px] mt-[-10px]'>Get In Touch With Us</p>
        <div className="flex space-x-5 mt-5 mb-5">
          <div className=' w-[250px] h-[250px] text-center justify-center flex flex-col items-center shadow-lg rounded-md'>
            <CallIcon sx={{ fontSize: 40 }} />
            <h3 className=' mt-2 text-[30px]'>Call Us On</h3>
            <p className='mt-2'>+91 9926865740</p>
          </div>
          <div className=' w-[250px] h-[250px] text-center justify-center flex flex-col items-center shadow-lg rounded-md'>
            <EmailIcon sx={{ fontSize: 40 }} />
            <h3 className='mt-2 text-[30px]'>Email Us</h3>
            <p className='mt-2'>+91 9926865740</p>
          </div>
          <div className=' w-[250px] h-[250px] text-center justify-center flex flex-col items-center shadow-lg rounded-md'>
            <LocationOnIcon sx={{ fontSize: 40 }} />
            <h3 className='mt-2 text-[30px]'>Our Location</h3>
            <p className='mt-2'>MR-4 Road, Vijay Nagar, <br /> Jabalpur </p>
          </div>
        </div>
      </div>
    </PageWithNavbar>
  );
};

export default Contact;
