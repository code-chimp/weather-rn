export default (code: number) => {
  switch (true) {
    case code >= 200 && code <= 232:
      return require('../assets/thunder.png');

    case code === 500 || code === 501:
      return require('../assets/light-rain.png');

    case code >= 502 && code <= 504:
      return require('../assets/heavy-rain.png');

    case code === 511:
      return require('../assets/hail.png');

    case code >= 520 && code <= 531:
      return require('../assets/showers.png');

    case code >= 600 && code <= 610:
      return require('../assets/snow.png');

    case code >= 611 && code <= 613:
      return require('../assets/sleet.png');

    case code === 800:
      return require('../assets/clear.png');

    case code >= 801 && code <= 803:
      return require('../assets/light-cloud.png');

    case code === 804:
      return require('../assets/heavy-cloud.png');

    default:
      return require('../assets/clear.png');
  }
};
