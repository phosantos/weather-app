import React from 'react';
import styles from './Current.module.css';

const Current = ({ data, selectIcon, formatDate }) => {
  return (
    <div className={styles.current}>
      <p>{`${data.location.name}, ${data.location.region}`}</p>
      <span className={styles.date}>{formatDate(data.location.localtime)}</span>
      <span className={styles.lastUpdated}>
        {`Last updated: ${
          data.current.last_updated.split(' ')[1]
        } (local time)`}
      </span>
      <div>
        <div className={styles.currTemp}>
          <div
            className={styles.icon}
            style={{
              backgroundImage: `url('${selectIcon(
                data.current.condition.code,
                data.current.is_day,
              )}')`,
            }}
          ></div>
          <p className={styles.temp}>
            {data.current.temp_c}
            <span>°C</span>
          </p>
        </div>

        <div className={styles.conditions}>
          <p>{data.current.condition.text}</p>
          <p>
            {data.forecast.forecastday[0].day.maxtemp_c}°/
            {data.forecast.forecastday[0].day.mintemp_c}°
          </p>
          <p>feels like {data.current.feelslike_c}°</p>
        </div>
      </div>
    </div>
  );
};

export default Current;
