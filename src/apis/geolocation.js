const handleSuccess = (position) => {
  const { latitude, longitude } = position.coords;
  return {
    lat: latitude,
    lon: longitude,
  };
};

const getCurrentLocation = () => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject),
  )
    .then(handleSuccess)
    .catch(console.error);
};

export { getCurrentLocation };
