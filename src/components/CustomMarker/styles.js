import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: colors.green,
    padding: 2,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 0.5,
  },
  icon: {
    margin: 4,
  },
  arrow: {
    backgroundColor: colors.transparent,
    borderWidth: 4,
    borderColor: colors.transparent,
    borderTopColor: colors.green,
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: colors.transparent,
    borderWidth: 4,
    borderColor: colors.transparent,
    borderTopColor: colors.primary,
    alignSelf: 'center',
    marginTop: -0.5,
  },
});

export default styles;
