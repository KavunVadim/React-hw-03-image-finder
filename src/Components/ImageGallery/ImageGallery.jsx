import React from "react";
import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";

const ImageGallery = ({ images, loader }) => {
  return (
    <>
      <ul className="ImageGallery">
        {<Loader loader={loader} /> &&
          images.map((image) => <ImageGalleryItem image={image} />)}
      </ul>
      {!!images.length && <Button />}
    </>
  );
};

ImageGallery.propTypes = {
  // bla: PropTypes.string,
};

ImageGallery.defaultProps = {
  // bla: 'test',
};

export default ImageGallery;
