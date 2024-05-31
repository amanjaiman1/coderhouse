import React, { useState } from 'react';
import JoinModal from '../modals/Joinmodal';

const JoinUsButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className="bg-indigo-600 text-white px-6 py-1 rounded-md">
        Join Us
      </button>
      <JoinModal open={open} onClose={handleClose} />
    </div>
  );
};

export default JoinUsButton;
