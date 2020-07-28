import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "../Phonebook.module.css";

const Spinner = () => {
  return (
    <Loader
      className={styles.spinner}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={5000}
    />
  );
};

export default Spinner;
