import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.white,
    width: 250,
    height: 45,
    borderColor: colors.defaultPrimary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonTitle: {
    color:  colors.defaultPrimary,
  },
  text: {
    color: colors.black,
    fontSize: fontSizes.big,
  },
});

export default styles;
