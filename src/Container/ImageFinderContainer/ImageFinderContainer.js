import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Searchbar from "../../Components/Searchbar/Searchbar";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";

const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY;

const ImageFinder = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(false);

  const withCredentials = () => {
    return `https://pixabay.com/api/?q=${name}&page=${currentPage}&per_page=${12}&key=${CLIENT_KEY}`;
  };

  const inputChange = (e) => {
    if (!e.target.value) {
      setName([]);
      setCurrentPage(1);
    }
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getImages();
    }
  };

  const getImages = async () => {
    setLoader(true);
    try {
      const response = await axios.get(withCredentials());

      setImages([...images, ...response.data.hits]);
    } catch (error) {
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      <Searchbar inputChange={inputChange} name={name} onSubmit={onSubmit} />
      <ImageGallery images={images} loader={loader} />
    </>
  );
};

ImageFinder.propTypes = {
  // bla: PropTypes.string,
};

ImageFinder.defaultProps = {
  // bla: 'test',
};

export default ImageFinder;
