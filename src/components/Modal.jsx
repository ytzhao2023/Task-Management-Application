import React, { useState } from 'react';

function Modal({ isOpen, onClose, onSubmit, children }) {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      {children}
    </div>
  );
}

export default Modal;
