import Button from './Button/Button.jsx';

const ButtonCon = ({ cities, onClick }) => {
  return (
    <div>
      {cities.map((city) => (
        <Button key={city.id} onClick={() => onClick(city.id)}>
          {city.value}
        </Button>
      ))}
    </div>
  );
};

export default ButtonCon;
