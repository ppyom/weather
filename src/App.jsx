import { useEffect, useState } from 'react';
import { getCurrentLocation } from './apis/geolocation.js';
import WeatherAPI from './apis/weather.js';
import WeatherBox from './components/WeatherBox/WeatherBox.jsx';
import ButtonCon from './components/ButtonCon/ButtonCon.jsx';

const cities = [
  { id: 'current', value: '현재 위치' },
  { id: 'seoul', value: '서울' },
  { id: 'hongkong', value: '홍콩' },
  { id: 'paris', value: '파리' },
  { id: 'new york', value: '뉴욕' },
];

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [city, setCity] = useState(null);

  const getWeather = async (options) => {
    WeatherAPI.getCurrentWeather(options).then(setWeatherInfo);
  };
  const getCurrentWeather = () => {
    getCurrentLocation() //
      .then(getWeather)
      .catch(console.error);
  };
  const handleCityBtnClick = (selected) => {
    setCity(selected === 'current' ? null : selected);
  };

  useEffect(() => {
    !city ? getCurrentWeather() : getWeather({ q: city });
  }, [city]);

  return (
    <main className="main">
      <h1>날씨 API 활용</h1>
      <WeatherBox data={weatherInfo || {}} />
      <ButtonCon cities={cities} onClick={handleCityBtnClick} />
    </main>
  );
}

export default App;
