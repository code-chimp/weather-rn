import React, { Component } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';
import { fetchLocationLatLon, fetchWeather } from './services/weather.service';
import ErrorDisplay from './components/ErrorDisplay';
import styles from './App.styles';

export interface IAppState {
  location: string;
  temperature: number;
  weather: string;
  weatherCode: number;
  loading: boolean;
  error: boolean;
}

export default class App extends Component<any, IAppState> {
  state = {
    location: '',
    temperature: 0,
    weather: '',
    weatherCode: 800,
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.handleLocationSubmit('Omaha');
  }

  handleLocationSubmit = async (city: string) => {
    if (city) {
      this.setState({ loading: true, error: false }, async () => {
        try {
          const loc = await fetchLocationLatLon(city);
          const { location, weather, weatherCode, temperature } = await fetchWeather(loc);

          this.setState({
            location,
            weather,
            weatherCode,
            temperature,
            loading: false,
          });
        } catch (e) {
          console.error(e);

          this.setState({
            loading: false,
            error: true,
          });
        }
      });
    }
  };

  render() {
    const { error, loading, location, weather, weatherCode, temperature } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <ImageBackground
          source={getImageForWeather(weatherCode)}
          style={styles.imageContainer}
          imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} color="#fff" size="large" />
            {!loading ? (
              <View>
                {error ? (
                  <ErrorDisplay errorText="Could not load weather, please try a different city." />
                ) : (
                  <View>
                    <Text style={[styles.textStyle, styles.largeText]}>{location}</Text>
                    <Text style={[styles.textStyle, styles.smallText]}>{weather}</Text>
                    <Text style={[styles.textStyle, styles.largeText]}>
                      {`${Math.round(temperature)}°`}
                    </Text>
                    <SearchInput
                      placeholder="Search any city"
                      onSubmit={this.handleLocationSubmit}
                    />
                  </View>
                )}
              </View>
            ) : null}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
