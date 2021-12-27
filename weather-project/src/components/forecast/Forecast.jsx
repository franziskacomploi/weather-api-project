import React from "react";
import PropTypes from "prop-types";

import CurrentDay from "../current-day/CurrentDay";
import CurrentDayDescription from "../current-day/CurrentDayDescription";
import UpcomingDaysForecast from "../upcoming-day/UpcomingDaysForecast";

const Forecast = ({ forecast }) => (
  <div className="forecast-box mx-auto">
    <div className="flex flex-col md:flex-row justify-start">
      <div className="flex flex-col">
        <div className="forecast-card">
          <CurrentDay {...forecast.currentDay} />
        </div>
      </div>
      <div className="w-full flex flex-col justify-between">
        <CurrentDayDescription forecast={forecast.currentDayDetails} />
        <UpcomingDaysForecast days={forecast.upcomingDays} />
      </div>
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
