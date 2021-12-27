import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ submitSearch }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="location"
        type="text"
        className="form-input"
        placeholder="Search for location"
        required
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />

      <button type="submit" className="form-button" onClick={handleSubmit}>
        SEARCH
      </button>
    </form>
  );
};

Form.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default Form;
