import React from "react";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Error from "./components/error/Error";
import Loader from "./components/loader/Loader";
import Forecast from "./components/forecast/Forecast";

import useForecast from "./hooks/useForecast";

const App = () => {
  const { isLoading, isError, forecast } = useForecast();
  return (
    <>
      <Header />
      <div className="main-box">
        <Form />
        {isLoading && <Loader />}
        {isError && <Error message={isError} />}
        {forecast && <Forecast />}
      </div>
    </>
  );
};

export default App;
