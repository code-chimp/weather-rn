import IWeatherCondition from './IWeatherCondition';

interface IOpenWeatherMapWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<IWeatherCondition>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    '1h'?: number;
    '3h'?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
    message?: string;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export default IOpenWeatherMapWeatherResponse;
