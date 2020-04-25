import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ image }) => {
  const { id, webformatURL } = image;
  return (
    <>
      <li className="ImageGalleryItem" key={id}>
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
      </li>
    </>
  );
};

// ImageGalleryItem.propTypes = {
//   // bla: PropTypes.string,
// };

// ImageGalleryItem.defaultProps = {
//   // bla: 'test',
// };

export default ImageGalleryItem;
