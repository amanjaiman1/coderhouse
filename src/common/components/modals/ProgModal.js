import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CheckCircleOutline, HighlightOff } from '@mui/icons-material';

import "./index.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: '#ffffff',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  padding: '32px',
  zIndex: 1000, // Ensure modal is on top
};

const titleStyle = {
  fontSize: '26px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333333',
  borderBottom: '2px solid #4CAF50',
  paddingBottom: '10px',
};

const descriptionStyle = {
  fontSize: '16px',
  color: '#666666',
  marginBottom: '16px',
};

const priceStyle = {
  fontSize: '18px',
  color: '#333333',
  fontWeight: 'bold',
  marginBottom: '16px',
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '48%',
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12px',
  background: '#f9f9f9',
  borderRadius: '8px',
  padding: '2px',
};

const iconStyle = {
  marginRight: '8px',
  fontSize: '20px',
};

const ProgModal = ({ onClose, plan }) => {
  if (!plan) return null;

  // Separate benefits into available and unavailable
  const availableBenefits = plan.benifits.filter(benefit => benefit.isAvailable);
  const unavailableBenefits = plan.benifits.filter(benefit => !benefit.isAvailable);

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
            top: '16px',
            right: '16px',
            color: '#999999',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={titleStyle} id="modal-modal-title" variant="h6" component="h2">
          {plan.name} ({plan.title})
        </Typography>
        <Typography sx={descriptionStyle} id="modal-modal-description" component="p">
          Actual Price: <span className='line-through'>{plan.price}</span>
        </Typography>
        <Typography sx={priceStyle} id="modal-modal-description" component="p">
          Offer Price: {plan.actualPrice}
        </Typography>
        <Typography sx={descriptionStyle} id="modal-modal-description" component="p">
          Benefits:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={columnStyle}>
            {availableBenefits.map((benefit, index) => (
              <li key={index} style={listItemStyle}>
                <CheckCircleOutline style={{ ...iconStyle, color: '#4CAF50' }} />
                <span style={{ color: '#4CAF50', fontSize: '14px' }}>
                  {benefit.title}
                </span>
              </li>
            ))}
          </Box>
          <Box sx={columnStyle}>
            {unavailableBenefits.map((benefit, index) => (
              <li key={index} style={listItemStyle}>
                <HighlightOff style={{ ...iconStyle, color: '#F44336' }} />
                <span style={{ color: '#F44336', fontSize: '14px' }}>
                  {benefit.title}
                </span>
              </li>
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProgModal;
