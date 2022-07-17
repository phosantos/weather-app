import React from 'react';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Weather from './Components/Weather';
import { WeatherStorage } from './WeatherContext';

function App() {
  const [openSearch, setOpenSearch] = React.useState(false);

  if (openSearch)
    return (
      <div className="App">
        <WeatherStorage>
          <Search setOpenSearch={setOpenSearch} />
        </WeatherStorage>
      </div>
    );

  return (
    <div className="App">
      <WeatherStorage>
        <Header setOpenSearch={setOpenSearch} />
        <Weather />
      </WeatherStorage>
    </div>
  );
}

export default App;
