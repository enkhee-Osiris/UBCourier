import { StyleSheet } from 'react-native';
import {
  colors,
  fontSizes,
  fontWeights,
  fontStyle,
} from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 226,
    height: 34,
  },
  container: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonFont: fontStyle({
    fontSize: fontSizes.small,
    fontWeight: fontWeights.bold,
  }),
  error: fontStyle({
    fontSize: fontSizes.small,
    color: colors.error,
    textAlign: 'center',
  }),
  navigatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    margin: 7,
  },
  navigator: fontStyle({
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.small,
    color: colors.drakGrey,
  }),
});

export default styles;
