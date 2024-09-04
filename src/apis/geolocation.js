class GeolocationAPI {
  static getCurrentLocation() {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject),
    )
      .then(this.#handleSuccess)
      .catch(console.error);
  }
  static #handleSuccess(position) {
    const { latitude, longitude } = position.coords;
    return {
      lat: latitude,
      lon: longitude,
    };
  }
}

export default GeolocationAPI;
