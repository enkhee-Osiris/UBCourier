import { StyleSheet } from 'react-native';
import {
  colors,
  fontSizes,
  fontWeights,
  fontStyle,
} from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  details: {
    justifyContent: 'space-between',
  },
  detail: {
    flexDirection: 'row',
  },
  name: fontStyle({
    fontSize: fontSizes.small,
    fontWeight: fontWeights.semiBold,
  }),
  icon: {
    marginRight: 5,
  },
  detailLabel: fontStyle({
    fontSize: fontSizes.verySmall,
    fontWeight: fontWeights.semiBold,
    marginRight: 5,
  }),
  detailText: fontStyle({
    fontSize: fontSizes.verySmall,
  }),
});

export default styles;
