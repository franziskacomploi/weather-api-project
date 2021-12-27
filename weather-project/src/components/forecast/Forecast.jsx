import React from "react";
import PropTypes from "prop-types";

import CurrentDay from "../current-day/CurrentDay";
import CurrentDayDescription from "../current-day/CurrentDayDescription";
import getUpcomingDaysForecast from "../../helpers/getUpcomingDaysForecast";

const Forecast = ({ forecast }) => (
  <div className="forecast-box mx-auto">
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <div className="forecast-card">
          <CurrentDay {...forecast.currentDay} />
        </div>
      </div>
      <div className="flex flex-col justify-between"></div>
    </div>
  </div>
);

Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDetails: PropTypes.array,
    upcomingDays: PropTypes.array,
  }),
};

export default Forecast;
