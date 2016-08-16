import { StyleSheet } from 'react-native';

const queueEntryStyles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  box: {
    backgroundColor: '#121212',
    borderColor: '#303030',
    borderBottomWidth: 0.4,
    height: 60,
  },
  activeTitle: {
    color: 'green',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 5,
  },
  inactiveTitle: {
    color: '#fffaf0',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 5,
  },
  description: {
    color: 'rgb(136, 136, 136)',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 10,
    paddingLeft: 10,
  },
});

export default queueEntryStyles;