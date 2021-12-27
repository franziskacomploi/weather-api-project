import React, { useState } from "react";

const Form = () => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
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

export default Form;
