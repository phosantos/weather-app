import React from 'react';
import styles from './ForecastHours.module.css';

const Forecastday = ({ data, selectIcon }) => {
  const hoursElement = React.useRef();

  React.useEffect(() => {
    const localtimeHour = +data.location.localtime.slice(-5, -3);
    [...hoursElement.current.children].forEach(
      (child) => (child.style.backgroundColor = 'initial'),
    );
    const currWeatherHours =
      hoursElement.current.children[localtimeHour].children[1];
    currWeatherHours.style.backgroundColor = 'var(--blue)';
    //
    currWeatherHours.scrollIntoView({ block: 'end' });
  }, [data]);

  return (
    <div className={styles.forecastHours}>
      <h2>Today</h2>
      <ul className={styles.hours} ref={hoursElement}>
        {data.forecast.forecastday[0].hour.map((h) => {
          return (
            <li className={styles.hourItem} key={h.time_epoch}>
              <span>{h.time.split(' ')[1]}</span>
              <div>
                <div
                  className={styles.icon}
                  style={{
                    backgroundImage: `url("${selectIcon(
                      h.condition.code,
                      h.is_day,
                    )}")`,
                  }}
                ></div>
                <p>{h.temp_c}°</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Forecastday;
