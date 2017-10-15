import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => (
  <Modal
    isOpen={props.isConfirmationModalOpen}
    contentLabel='Confirmation Modal'
    closeTimeoutMS={200}
    className='modal'
    shouldCloseOnOverlayClick={false}
  >
    <p className='modal__body'>Do you want to remove this expense?</p>
    <div className="modal__footer">
      <button
        onClick={props.onRemove}
        className='button'
      >
        Yes
      </button>
      <button
        onClick={props.closeConfirmationModal}
        className='button'
      >
        No
      </button>
    </div>

  </Modal>
);

export default ConfirmationModal;
