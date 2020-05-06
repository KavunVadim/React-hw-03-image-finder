/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ largeImageUrl, tags, closeModal }) => {
  useEffect(() => {
    window.addEventListener("keydown", handelPressKey);
    return () => {
      window.removeEventListener("keydown", handelPressKey);
    };
  }, []);

  const handelPressKey = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    closeModal();
  };

  const handelDropClick = (e) => {
    if (e.target.tagName === "IMG") {
      return;
    }
    closeModal();
  };

  return (
    <>
      <div className="Overlay" onClick={handelDropClick}>
        <div className="Modal">
          <img src={largeImageUrl} alt={tags} />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  largeImageUrl: PropTypes.node.isRequired,
  closeModal: PropTypes.func,
};

export default Modal;
