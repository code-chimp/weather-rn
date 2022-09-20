interface IOpenWeatherMapGeoResponse {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
  local_names: any;
}

export default IOpenWeatherMapGeoResponse;
