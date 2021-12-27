import React from "react";
import PropTypes from "prop-types";

const UpcomingDaysForecastItem = ({ weekday, temperature, imgUrl }) => {
  const imgUrlBase = "https://www.metaweather.com/static/";

  return (
    <li className="flex flex-col justify-center items-center p-2">
      <img
        className="mb-2"
        width="30"
        src={`${imgUrlBase}img/weather/${imgUrl}.svg`}
        alt=""
      />
      <span className="mb-2">{weekday}</span>
      <span className="font-bold">{temperature}&deg;</span>
    </li>
  );
};

UpcomingDaysForecastItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default UpcomingDaysForecastItem;
