import { Platform, StatusBar, StyleSheet } from 'react-native';
import Platforms from './@enumerations/Platforms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    marginTop: StatusBar.currentHeight,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === Platforms.IOS ? 'AvenirNext-Regular' : 'Roboto',
    color: '#fff',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: 'cover',
  },
});

export default styles;
