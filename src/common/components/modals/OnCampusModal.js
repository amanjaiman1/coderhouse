import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CheckCircleOutline, HighlightOff } from '@mui/icons-material';

import "./index.css";

const modalStyle = {
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
};

const titleStyle = {
  fontSize: '26px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333333',
  borderBottom: '2px solid #4CAF50',
  paddingBottom: '10px',
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12px',
  background: '#f9f9f9',
  borderRadius: '8px',
  padding: '2px',
};

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '48%',
};

const onCampusModal = ({ onClose, course }) => {
  if (!course) return null;

  const availableBenefits = course.benifits.filter(benefit => benefit.isAvailable);
  const unavailableBenefits = course.benifits.filter(benefit => !benefit.isAvailable);

  return (
    <Modal
      open={true}
      onClose={onClose}
      BackdropProps={{
        style: { backdropFilter: 'blur(10px)' },
      }}
    >
      <Box sx={modalStyle}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', top: '16px', right: '16px', color: '#999999' }}
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={titleStyle}>
          {course.name} ({course.title})
        </Typography>
        <Typography>Actual Price: <span className='line-through'>{course.price}</span></Typography>
        <Typography>Offer Price: {course.actualPrice}</Typography>
        <Typography>Benefits:</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={columnStyle}>
            {availableBenefits.map((benefit, index) => (
              <li key={index} style={listItemStyle}>
                <CheckCircleOutline style={{ color: '#4CAF50', marginRight: '8px' }} />
                <span>{benefit.title}</span>
              </li>
            ))}
          </Box>
          <Box sx={columnStyle}>
            {unavailableBenefits.map((benefit, index) => (
              <li key={index} style={listItemStyle}>
                <HighlightOff style={{ color: '#F44336', marginRight: '8px' }} />
                <span>{benefit.title}</span>
              </li>
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default onCampusModal;
