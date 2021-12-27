import React from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Error from "./components/error/Error";
import Loader from "./components/loader/Loader";
import Forecast from "./components/forecast/Forecast";

import useForecast from "./hooks/useForecast";

const App = () => {
  const { isLoading, isError, forecast, submitRequests } = useForecast();

  const handleSubmit = (value) => {
    submitRequests(value);
  };

  return (
    <>
      <Header />
      {!forecast && (
        <div className="main-box">
          {!isLoading && <Form submitSearch={handleSubmit} />}
          {isLoading && <Loader />}
          {isError && !isLoading && <Error message={isError} />}
        </div>
      )}
      {forecast && <Forecast forecast={forecast} />}
    </>
  );
};

export default App;
