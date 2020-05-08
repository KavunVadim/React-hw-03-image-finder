import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL, largeImageURL, tags } = image;

  return (
    <>
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          onClick={() => openModal(largeImageURL, tags)}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;
