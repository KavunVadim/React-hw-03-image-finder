import React from "react";
import Spinner from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loader() {
  return (
    <Spinner
      type="Oval"
      color="#00BFFF"
      height={200}
      width={200}
      timeout={3000}
      style={{ marginTop: "10%" }}
    />
  );
}
