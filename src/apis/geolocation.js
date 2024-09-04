class GeolocationAPI {
  static getCurrentLocation() {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject),
    )
      .then(this.#handleSuccess)
      .catch(this.#handleError);
  }
  static #handleSuccess(position) {
    const { latitude, longitude } = position.coords;
    return {
      lat: latitude,
      lon: longitude,
    };
  }
  static #handleError() {
    return {
      lat: 37.5683,
      lon: 126.9778,
    };
  }
}

export default GeolocationAPI;
