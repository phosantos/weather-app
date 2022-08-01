import React from 'react';
import { ReactComponent as SearchIcon } from '../Assets/search.svg';
import { ReactComponent as CloseIcon } from '../Assets/x.svg';
import styles from './Search.module.css';
import API_KEY from '../API_KEY';
import { WeatherContext } from '../WeatherContext';

const Search = ({ setOpenSearch }) => {
  const [inputValue, setInputValue] = React.useState('');
  const { setGeolocation } = React.useContext(WeatherContext);
  const [data, setData] = React.useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) return;

    fetch(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${inputValue
        .toLowerCase()
        .split(' ')
        .join('-')}`,
    )
      .then((r) => r.json())
      .then((json) => setData(json));
  }

  function onResultOptionClick({ target }) {
    setGeolocation(target.dataset.url);
    window.localStorage.setItem('geolocation', target.dataset.url);
    setOpenSearch((currValue) => !currValue);
  }

  return (
    <section>
      <div className={styles.searchHeader}>
        <div className={`${styles.searchHeaderContainer} container`}>
          <form className={styles.searchBar} onSubmit={handleSubmit}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
          <div
            className={styles.closeSearchButton}
            onClick={() => {
              setOpenSearch((currValue) => !currValue);
            }}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
      <div className={`${styles.searchResults} container`}>
        {data &&
          data.map(({ id, name, region, country, url }) => {
            return (
              <p
                key={id}
                onClick={onResultOptionClick}
                data-url={url}
                className={styles.result}
              >
                {`${name}, ${region}, ${country}`}
              </p>
            );
          })}
      </div>
    </section>
  );
};

export default Search;
