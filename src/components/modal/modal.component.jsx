import React from 'react';
import { Modal, CloseContainer } from './modal.style';
import { FaTimes } from 'react-icons/fa';
const ModalContainer = ({ isOpen, closeModal, movie, clicked }) => {
  return (
    <div>
      <Modal isOpen={isOpen} ariaHideApp={false}>
        <CloseContainer>
          <FaTimes size={40} style={{ color: 'white' }} onClick={closeModal} />
        </CloseContainer>
      </Modal>
    </div>
  );
};

export default ModalContainer;
