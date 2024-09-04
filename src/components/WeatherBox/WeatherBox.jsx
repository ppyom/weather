const WeatherBox = ({ data }) => {
  const { city, country, temp, description } = data;
  return (
    <section>
      <h2>
        {country} / {city}
      </h2>
      <p>
        {temp} &deg;C / {description}
      </p>
    </section>
  );
};

export default WeatherBox;
