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
    width: 900,
    height: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 1000, // Ensure modal is on top
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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {course.title}
                </Typography>
                <img src={course.image} alt={course.title} style={{ width: '50%', height: 'auto', borderRadius: '8px', marginTop: '16px' }} />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duration: {course.duration}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Key Highlights:
                </Typography>
                <ul>
                    <li>{course.key1}</li>
                    <li>{course.key2}</li>
                    <li>{course.key3}</li>
                </ul>
                {/* Additional details can be added here */}
            </Box>
        </Modal>
    );
};

export default Comodal;
