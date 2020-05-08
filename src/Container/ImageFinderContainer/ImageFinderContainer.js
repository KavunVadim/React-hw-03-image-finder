import React, { Component } from "react";

import Searchbar from "../../Components/Searchbar/Searchbar";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";
import Modal from "../../Components/Modal/Modal";
import Button from "../../Components/Button/Button";
import Loader from "../../Components/Loader/Loader";
import api from "../../helpers/api";

class ImageFinderContainer extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    largeImageUrl: "",
    tags: "",
    loader: false,
    error: false,
    isOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, images } = this.state;
    if (prevState.query !== query) {
      this.getImages();
    }

    if (prevState.images === images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  getImages = async () => {
    const { query, images, page } = this.state;

    this.setState({ loader: true });

    try {
      const response = await api(query, page);
      this.setState({ images: [...images, ...response], page: page + 1 });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loader: false });
    }
  };

  openModal = (largeImageURL, tags) => {
    this.setState({ tags: tags, largeImageUrl: largeImageURL, isOpen: true });
  };

  closeModal = () => {
    this.setState({ largeImageUrl: "", isOpen: false });
  };

  onSubmit = (name) => {
    const { query } = this.state;
    if (query === name) return;
    this.setState({ query: name, images: [], page: 1 });
  };

  render() {
    const { images, isOpen, loader } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {loader && <Loader />}
        {!loader && images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}
        {isOpen && (
          <Modal
            closeModal={this.closeModal}
            largeImageUrl={this.state.largeImageUrl}
            tags={this.state.tags}
          />
        )}
        {!!images.length && !loader && <Button loadMore={this.getImages} />}
      </>
    );
  }
}
export default ImageFinderContainer;
