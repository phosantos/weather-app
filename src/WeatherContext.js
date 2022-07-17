import React from 'react';
import API_KEY from './API_KEY';
import icons from './weather-icons.json';

export const WeatherContext = React.createContext();

export const WeatherStorage = ({ children }) => {
  const [geolocation, setGeolocation] = React.useState();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  function selectIcon(code, is_day) {
    const iconSelected = icons.filter((icon) => {
      return icon.code === code;
    });
    if (is_day) {
      return iconSelected[0].day;
    } else {
      return iconSelected[0].night;
    }
  }

  React.useEffect(() => {
    if (!window.localStorage.getItem('geolocation')) {
      navigator.geolocation.getCurrentPosition((p) => {
        setGeolocation(`${p.coords.latitude},${p.coords.longitude}`);
      });
    } else {
      setGeolocation(window.localStorage.getItem('geolocation'));
    }
  }, []);

  React.useEffect(() => {
    async function fetchWeather() {
      if (geolocation) {
        try {
          setLoading(true);
          const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${geolocation}&days=3&aqi=no&alerts=no`,
          );
          const json = await response.json();
          setData(json);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      } else {
        setData(null);
      }
    }
    fetchWeather();
  }, [geolocation]);

  return (
    <WeatherContext.Provider
      value={{ geolocation, setGeolocation, data, loading, error, selectIcon }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
