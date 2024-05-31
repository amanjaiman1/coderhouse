import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import "./index.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height: 350,
    bgcolor: 'background.paper',
    border: '1px solid transparent',
    boxShadow: 24,
    p: 4,
    zIndex: 1000, // Ensure modal is on top
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px',
};

const contentStyle = {
    marginLeft: '20px', // Adjust the spacing between the image and content
    flex: 1, // Allow content to take remaining space
};

const imageStyle = {
    width: '40%', // Adjust the image width as needed
    height: 'auto',
    borderRadius: '8px',
};

const Comodal = ({ onClose, course }) => {
    if (!course) return null;

    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            BackdropProps={{
                style: {
                    backdropFilter: 'blur(10px)', // Apply blur effect
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
                <img src={course.image} alt={course.title} style={imageStyle} />
                <Box sx={contentStyle}>
                    <Typography className='border-b-2 border-green-500 py-2' id="modal-modal-title" variant="h6" component="h2">
                        {course.title}
                    </Typography>
                    <Typography id="modal-modal-description" className='' sx={{ mt: 2, fontSize: '25px', fontFamily: 'Poppins' }}>
                        Duration: {course.duration}
                    </Typography>
                    <Typography id="modal-modal-description" className=' underline' sx={{ mt: 2, fontSize: '20px', fontFamily: 'Poppins' }}>
                        Key Highlights:
                    </Typography>
                    <ul className='space-y-3 mt-3'>
                        <li><button className=' bg-[#965dff43] border shadow-lg w-[100%] h-[35px] text-[20px] text-left px-2 rounded-sm'>{course.key1}</button></li>
                        <li><button className=' bg-[#965dff43] border shadow-lg w-[100%] h-[35px] text-[20px] text-left px-2 rounded-sm'>{course.key2}</button></li>
                        <li><button className=' bg-[#965dff43] border shadow-lg w-[100%] h-[35px] text-[20px] text-left px-2 rounded-sm'>{course.key3}</button></li>
                    </ul>
                    {/* Additional details can be added here */}
                </Box>
            </Box>
        </Modal>
    );
};

export default Comodal;
