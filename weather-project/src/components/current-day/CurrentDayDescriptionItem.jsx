import React from "react";
import PropTypes from "prop-types";

const CurrentDayDescriptionItem = ({ name, value, unit }) => (
  <div className="flex justify-between gap-4">
    <p className="mb-0 font-bold uppercase">{name}</p>
    <p className="mb-0">
      {value} {unit}
    </p>
  </div>
);

CurrentDayDescriptionItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default CurrentDayDescriptionItem;
