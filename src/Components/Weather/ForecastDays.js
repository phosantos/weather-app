import React from 'react';
import styles from './ForecastDays.module.css';

const ForecastDays = ({ data, selectIcon, formatDate }) => {
  return (
    <ul className={styles.forecastDays}>
      <h2>Next Days</h2>
      {data.forecast.forecastday.map((d) => {
        return (
          <li key={d.date_epoch}>
            <span>{formatDate(d.date + ' 00:00')}</span>
            <div
              className={styles.icon}
              style={{
                backgroundImage: `url("${selectIcon(
                  d.day.condition.code,
                  true,
                )}")`,
              }}
            ></div>
            <span>{`${d.day.maxtemp_c}°/${d.day.mintemp_c}°`}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ForecastDays;
