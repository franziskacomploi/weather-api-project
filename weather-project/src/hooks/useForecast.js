import { useState } from "react";
import axios from "axios";

import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getCurrentDayDetailedForecast from "../helpers/getCurrentDayDetailedForecast";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(false);

  const getWoeid = async (location) => {
    // Get ID of location
    const { data } = await axios(`${REQUEST_URL}/search`, {
      params: { query: location },
    });

    //Error handling
    if (!data || data.length === 0) {
      setError("The location doesn't exist.");
      return;
    }

    return data[0];
  };

  const getForecastData = async (id) => {
    // Get Weather
    const { data } = await axios(`${REQUEST_URL}/${id}`);

    //Error handling
    if (!data || data.length === 0) {
      setError("Something went wrong.");
      return;
    }

    return data;
  };

  const gatherForecastData = (data) => {
    const currentDay = getCurrentDayForecast(
      data.consolidated_weather[0],
      data.title
    );
    const currentDayDetails = getCurrentDayDetailedForecast(
      data.consolidated_weather[0]
    );
    const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

    setForecast({ currentDay, currentDayDetails, upcomingDays });
    setLoading(false);
  };

  const submitRequests = async (location) => {
    setLoading(true);
    setError(false);

    const response = await getWoeid(location);
    if (!response?.woeid) {
      setLoading(false);
      return;
    }
    const data = await getForecastData(response.woeid);
    if (!data) {
      setLoading(false);
      return;
    }
    gatherForecastData(data);
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequests,
  };
};

export default useForecast;
