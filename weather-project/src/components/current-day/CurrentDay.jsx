import React from "react";
import PropTypes from "prop-types";

import locationIcon from "../../styles/assets/location-pin.png";

const CurrentDay = ({
  weekday,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
}) => (
  <div className="current-card">
    <div className="current-img"></div>
    <div className="current-gradient"></div>
    <div className="current-cardInner flex flex-col justify-between py-4 px-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">{weekday}</h2>
        <p className="mb-0">{date}</p>
        <p className="flex items-center font-light mb-1">
          <img
            width="10"
            height="15"
            src={locationIcon}
            className="mr-2"
            alt="location pin icon"
          />
          <span>{location}</span>
        </p>
      </div>
      <div>
        <img width="45" src={weatherIcon} alt="" />
        <h2 className="font-bold mb-1 text-2xl">
          <span>{temperature}</span>°C
        </h2>
        <h5 className="font-light">{weatherDescription}</h5>
      </div>
    </div>
  </div>
);

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;
