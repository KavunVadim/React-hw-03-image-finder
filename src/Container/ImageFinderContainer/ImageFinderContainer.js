import React, { Component } from "react";

import axios from "axios";
import Searchbar from "../../Components/Searchbar/Searchbar";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";
import Modal from "../../Components/Modal/Modal";
import Button from "../../Components/Button/Button";
import Loader from "../../Components/Loader/Loader";

const CLIENT_KEY = process.env.REACT_APP_CLIENT_KEY;

class ImageFinderContainer extends Component {
  state = {
    images: [],
    searchName: "",
    currentPage: 1,
    largeImageUrl: "",
    tags: "",
    loader: false,
    error: false,
    isOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchName, images } = this.state;
    if (prevState.searchName !== searchName) {
      this.getImages();
    }

    if (prevState.images === images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  getImages = async (page = 1) => {
    const { searchName, images } = this.state;
    this.setState({ loader: true });
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchName}&page=${page}&per_page=12&lang=ru&key=${CLIENT_KEY}`
      );

      this.setState({
        images: [...images, ...response.data.hits],
      });
    } catch (error) {
      console.log("ERROR GET");
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
    const { searchName } = this.state;
    if (searchName === name) return;
    this.setState({ searchName: name, images: [], currentPage: 1 });
  };

  loadMore = () => {
    const newPage = this.state.currentPage + 1;
    this.getImages(newPage);
    this.setState({ currentPage: newPage });
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
        {!!images.length && !loader && <Button loadMore={this.loadMore} />}
      </>
    );
  }
}
export default ImageFinderContainer;
