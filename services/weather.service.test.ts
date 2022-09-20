import mockGeoResponse from '../@mocks/openweathermap/mockGeoResponse';
import mockWeatherResponse from '../@mocks/openweathermap/mockWeatherResponse';
import { fetchLocationLatLon, fetchWeather } from './weather.service';

describe('services / weather', () => {
  describe('fetchLocationLatLon', () => {
    beforeEach(() => {
      fetchMock.resetMocks();
    });

    it('should return an object with lat and lon numeric fields on success', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockGeoResponse));

      const { lat, lon } = mockGeoResponse[0];
      const expected = { lat, lon };
      const result = await fetchLocationLatLon('Cityname');

      expect(fetchMock.mock.calls.length).toBe(1);
      expect(result).toEqual(expected);
    });

    it('should throw an exception when city not found', async () => {
      fetchMock.mockResponseOnce('[]');

      await expect(fetchLocationLatLon('Cityname')).rejects.toThrow('not found');
    });

    it('should throw an exception when we have a client error', async () => {
      const msg = 'test error';
      fetchMock.mockRejectOnce(new Error(msg));

      await expect(fetchLocationLatLon('Cityname')).rejects.toThrow(msg);
    });
  });

  describe('fetchWeather', () => {
    beforeEach(() => {
      fetchMock.resetMocks();
    });

    it('should return an object with lat and lon numeric fields on success', async () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockWeatherResponse));

      const {
        main,
        weather: [forecast],
        name,
      } = mockWeatherResponse;

      const expected = {
        location: name,
        temperature: main.temp,
        weather: forecast.description,
        weatherCode: forecast.id,
      };

      const result = await fetchWeather({ lat: 1, lon: 1 });

      expect(fetchMock.mock.calls.length).toBe(1);
      expect(result).toEqual(expected);
    });

    it('should throw an exception when we have a client error', async () => {
      const msg = 'test error';
      fetchMock.mockRejectOnce(new Error(msg));

      await expect(fetchWeather({ lat: 1, lon: 1 })).rejects.toThrow(msg);
    });
  });
});
