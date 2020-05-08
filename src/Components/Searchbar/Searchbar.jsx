import React, { Component } from "react";
import PropTypes from "prop-types";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    name: PropTypes.string,
    inputChange: PropTypes.func,
  };

  state = { name: "" };

  inputChange = (e) => {
    this.setState({ name: e.target.value });
  };

  formSubmit = (e) => {
    const { name } = this.state;

    e.preventDefault();
    if (!name) {
      return;
    }
    this.props.onSubmit(name);

    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.formSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={name}
              onChange={this.inputChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
