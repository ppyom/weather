class WeatherAPI {
  static #BASEURL = 'https://api.openweathermap.org/data/2.5/weather';
  static #DEFAULT_OPTION = {
    lang: 'kr',
    appid: import.meta.env.VITE_WEATHER_API_KEY,
  };
  static async getCurrentWeather(options) {
    const searchParams = new URLSearchParams({
      ...this.#DEFAULT_OPTION,
      ...options,
    });
    const url = new URL(`${this.#BASEURL}?${searchParams.toString()}`);
    const res = await fetch(url);
    const data = await res.json();
    return {
      city: data.name,
      country: data.sys.country,
      temp: (data.main.temp - 273.15).toFixed(2),
      description: data.weather[0].description,
    };
  }
}
export default WeatherAPI;
