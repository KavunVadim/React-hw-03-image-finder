import React from "react";
import PropTypes from "prop-types";

const Searchbar = ({ inputChange, name, onSubmit }) => {
  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onKeyPress={onSubmit}>
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
            onChange={inputChange}
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  // bla: PropTypes.string,
};

Searchbar.defaultProps = {
  // bla: 'test',
};

export default Searchbar;
