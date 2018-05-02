import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
  colors,
  fontStyle,
} from '../../../../styles';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    height: 62,
  },
  icon: {
    marginLeft: 18,
    marginRight: 8,
    alignItems: 'center',
  },
  inactiveIcon: {
    opacity: 0.62,
  },
  activeIcon: {
    borderLeftWidth: 5,
    borderLeftColor: colors.green,
  },
  label: fontStyle({
    fontSize: fontSizes.medium,
    color: colors.darkGrey,
    fontWeight: fontWeights.normal,
  }),
  activeLabel: {
    color: colors.green,
  },
});

export default styles;
