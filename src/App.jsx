import { useEffect, useState } from 'react';
import { getCurrentLocation } from './apis/geolocation.js';
import WeatherAPI from './apis/weather.js';
import WeatherBox from './components/WeatherBox/WeatherBox.jsx';
import ButtonCon from './components/ButtonCon/ButtonCon.jsx';

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const getWeather = async ({ lat, lon }) => {
    WeatherAPI.getCurrentWeather({ lat, lon }).then(setWeatherInfo);
  };

  useEffect(() => {
    getCurrentLocation().then(getWeather).catch(console.error);
  }, []);

  return (
    <main className="main">
      <h1>날씨 API 활용</h1>
      <WeatherBox data={weatherInfo || {}} />
      <ButtonCon />
    </main>
  );
}

export default App;
