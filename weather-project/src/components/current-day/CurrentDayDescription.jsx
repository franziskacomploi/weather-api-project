import React from "react";
import PropTypes from "prop-types";

import CurrentDayDescriptionItem from "./CurrentDayDescriptionItem";

const CurrentDayDescription = ({ forecast }) => (
  <div className="my-4 mx-4">
    <div className="flex flex-col">
      {forecast.map((item) => {
        return <CurrentDayDescriptionItem {...item} key={item.name} />;
      })}
    </div>
  </div>
);

CurrentDayDescription.propTypes = {
  forecast: PropTypes.array,
};

export default CurrentDayDescription;
