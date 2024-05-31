import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from 'emailjs-com';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 600,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  zIndex: 1000,
};

const JoinModal = ({ open, onClose }) => {
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
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{
        style: {
          backdropFilter: 'blur(10px)',
        }
      }}
    >
      <Box sx={style}>
        <IconButton 
          aria-label="close" 
          onClick={onClose} 
          sx={{ 
            position: 'absolute', 
            top: 8, 
            right: 8 
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography className=' border-b-2 border-green-500' id="modal-modal-title" variant="h6" component="h2">
          Be a Part of Our Coder House Family !
        </Typography>
        <form className="space-y-6 mt-5" onSubmit={onFinish}>
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
      </Box>
    </Modal>
  );
};

export default JoinModal;