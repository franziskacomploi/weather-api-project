import React from "react";
import PropTypes from "prop-types";

import UpcomingDaysForecastItem from "./UpcomingDayForecastItem";

const UpcomingDaysForecast = ({ days }) => (
  <ul className="upcoming-weeklist flex flex-row justify-evenly p-0">
    {days.map((day) => {
      return <UpcomingDaysForecastItem {...day} key={day.weekday} />;
    })}
  </ul>
);

UpcomingDaysForecast.propTypes = {
  days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;
