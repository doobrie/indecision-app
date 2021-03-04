import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleOkay}
      closeTimeoutMS={200}
      contentLabel="Selected Option"
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button
        className="button"
        onClick={props.handleOkay}
      >
        Okay
      </button>
    </Modal>
  )
};

export default OptionModal;