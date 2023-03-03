import React from "react";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
  return (
    <form className="search-form flex align-center">
      <input
        type="text"
        className="form-control-input text-dark-gray fs-15"
        placeholder="Search recipes here ..."
      />
      <button
        type="submit"
        className="form-submit-btn text-white text-uppercase fs-14"
      >
        <BsSearch className="btn-icon" size={20} />
      </button>
    </form>
  );
};

export default SearchForm;
