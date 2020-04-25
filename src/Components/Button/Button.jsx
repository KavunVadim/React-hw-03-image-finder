import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";

const Button = () => {
  return (
    <>
      <button className="Button">Load more</button>
    </>
  );
};

Button.propTypes = {
  // bla: PropTypes.string,
};

Button.defaultProps = {
  // bla: 'test',
};

export default Button;
