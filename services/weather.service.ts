import { OPENWEATHER_APIKEY } from '@env';
import { OpenWeatherMapApiUri } from '../constants';
import IOpenWeatherMapGeoResponse from '../@interfaces/openweathermap/IOpenWeatherMapGeoResponse';
import ICoords from '../@interfaces/openweathermap/ICoords';
import IOpenWeatherMapWeatherResponse from '../@interfaces/openweathermap/IOpenWeatherMapWeatherResponse';

export const fetchLocationLatLon = async (city: string): Promise<ICoords> => {
  const response = await fetch(
    `${OpenWeatherMapApiUri}/geo/1.0/direct?q=${city}&limit=1&appid=${OPENWEATHER_APIKEY}`,
  );
  const locations: Array<IOpenWeatherMapGeoResponse> = await response.json();

  if (!locations.length) {
    throw new Error('not found');
  }

  const { lat, lon } = locations[0];

  return { lat, lon };
};

export interface IWeatherResult {
  location: string;
  weatherCode: number;
  weather: string;
  temperature: number;
}

export const fetchWeather = async (loc: ICoords): Promise<IWeatherResult> => {
  const response = await fetch(
    `${OpenWeatherMapApiUri}/data/2.5/weather?lat=${loc.lat}&lon=${loc.lon}&units=imperial&appid=${OPENWEATHER_APIKEY}`,
  );
  const {
    main,
    weather: [primaryForecast],
    name,
  } = (await response.json()) as IOpenWeatherMapWeatherResponse;

  return {
    location: name,
    weatherCode: primaryForecast.id,
    weather: primaryForecast.description,
    temperature: main.temp,
  };
};
