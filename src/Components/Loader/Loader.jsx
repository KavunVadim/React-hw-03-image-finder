import React from "react";
import PropTypes from "prop-types";
// import Loader from "react-loader-spinner";

const Loader = ({ loader }) => {
  return (
    <>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
        visible={loader}
      />
    </>
  );
};

Loader.propTypes = {
  // bla: PropTypes.string,
};

Loader.defaultProps = {
  // bla: 'test',
};

export default Loader;
