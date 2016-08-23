import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: window.height,
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  backButton: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 10,
    paddingLeft: 20,
  },
  innerContainer: {
    marginTop: 80,
    width: window.width,
  },
  infoContainer: {
    alignItems: 'center',
  },
  image: {
    marginBottom: 16,
    width: window.width - 40,
    height: 280,
  },
  info: {
    height: 100,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    color: '#FFF',
    fontFamily: 'HelveticaNeue',
    marginBottom: 10,
    marginTop: 13,
    fontSize: 14,
  },
  description: {
    color: '#BBB',
    fontFamily: 'HelveticaNeue',
    fontSize: 10,
  },
  sliderContainer: {
    width: window.width - 40,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: 'purple',
    borderRadius: 10 / 2,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  timeLeft: {
    color: '#FFF',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  controlContainer: {
    flexDirection: 'row',
  },
  play: {
    marginLeft: 40,
    marginRight: 40,
  },
  forward: {
    marginTop: 11,
    marginRight: 45,
  },
  rewind: {
    marginTop: 11,
    marginLeft: 45,
  },
});

export default styles;
