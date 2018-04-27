import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.black,
    width: 250,
    height: 45,
    borderWidth: 0,
    borderRadius: 5,
    marginBottom: 15,
  },
  text: {
    color: colors.black,
    fontSize: fontSizes.big,
  },
});

export default styles;
