import React from 'react';
import styles from './CurrentIndices.module.css';
import { ReactComponent as Wind } from '../../Assets/wind.svg';
import { ReactComponent as Droplet } from '../../Assets/droplet.svg';
import { ReactComponent as Umbrella } from '../../Assets/umbrella.svg';

const CurrentIndices = ({ data }) => {
  return (
    <div className={styles.currentIndices}>
      <div className={styles.indice}>
        <p className={styles.title}>
          <Wind />
          Wind
        </p>
        <p>{data.current.wind_kph} kph</p>
      </div>
      <div className={styles.indice}>
        <p className={styles.title}>
          <Umbrella />
          Precipitation
        </p>
        <p>{data.current.precip_mm} mm</p>
      </div>
      <div className={styles.indice}>
        <p className={styles.title}>
          <Droplet />
          Humidity
        </p>
        <p>{data.current.humidity}%</p>
      </div>
    </div>
  );
};

export default CurrentIndices;
