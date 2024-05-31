import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

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

const ProgModal = ({ onClose, plan }) => {
  if (!plan) return null;

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
          {plan.name} ({plan.title})
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Actual Price: <span className='line-through'>{plan.price}</span>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Offer Price: {plan.actualPrice}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Benefits:
        </Typography>
        <ul>
          {plan.benifits.map((benefit, index) => (
            <li key={index}>
              {benefit.isAvailable ? <CheckOutlined /> : <CloseOutlined />} {benefit.title}
            </li>
          ))}
        </ul>
        {/* Additional details can be added here */}
      </Box>
    </Modal>
  );
};

export default ProgModal;
