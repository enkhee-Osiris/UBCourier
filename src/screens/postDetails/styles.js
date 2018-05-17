import { StyleSheet } from 'react-native';
import {
  dimensions,
  colors,
  fontSizes,
  fontWeights,
  fontStyle,
} from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: dimensions.indent,
  },
  postName: fontStyle({
    color: colors.primary,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.big,
  }),
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userBy: fontStyle({
    color: colors.primary,
    fontSize: fontSizes.verySmall,
    fontWeight: fontWeights.light,
    marginRight: 5,
  }),
  userAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  userDisplayName: fontStyle({
    color: colors.primary,
    fontSize: fontSizes.verySmall,
    fontWeight: fontWeights.light,
  }),
  detailsContainer: {
    marginVertical: dimensions.indent,
    flexDirection: 'row',
  },
  postImage: {
    width: 130,
    height: 130,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5,
  },
  details: {
    justifyContent: 'space-between',
  },
  label: fontStyle({
    color: colors.primary,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.verySmall,
    marginRight: 5,
  }),
  detail: fontStyle({
    color: colors.grey,
    fontSize: fontSizes.verySmall,
  }),
  mapContainer: {
    width: '100%',
    height: 250,
  },
  map: {
    flex: 1,
  },
});

export default styles;
