import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Modal.styles';

const Modal = (props) => {
  return (
    <>
      <div className="Overlay">
        <div className="Modal">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  // bla: PropTypes.string,
};

Modal.defaultProps = {
  // bla: 'test',
};

export default Modal;
