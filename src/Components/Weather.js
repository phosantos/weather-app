import React from 'react';
import Current from './Weather/Current';
import { WeatherContext, WeatherStorage } from '../WeatherContext';
import CurrentIndices from './Weather/CurrentIndices';
import ForecastHours from './Weather/ForecastHours';
import ForecastDays from './Weather/ForecastDays';

const Weather = () => {
  const { data, selectIcon } = React.useContext(WeatherContext);

  const style = {
    paddingTop: '40px',
    paddingBottom: '40px',
  };

  function formatDate(date) {
    const d = new Date(date);
    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    };
    return d.toLocaleString('en-us', options);
  }

  if (data) {
    return (
      <section className="container" style={style}>
        <WeatherStorage>
          <Current
            data={data}
            selectIcon={selectIcon}
            formatDate={formatDate}
          />
          <CurrentIndices data={data} />
          <ForecastHours data={data} selectIcon={selectIcon} />
          <ForecastDays
            data={data}
            selectIcon={selectIcon}
            formatDate={formatDate}
          />
        </WeatherStorage>
      </section>
    );
  } else {
    return null;
  }
};

export default Weather;
