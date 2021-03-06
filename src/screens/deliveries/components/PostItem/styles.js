import { StyleSheet } from 'react-native';
import {
  dimensions,
  colors,
  fontWeights,
  fontSizes,
  fontStyle,
} from '../../../../styles';

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    padding: dimensions.halfIndent,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  userContainer: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
  },
  userAvatar: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 10,
  },
  userDisplayName: fontStyle({
    color: colors.primary,
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.small,
  }),
  separator: {
    backgroundColor: colors.lightGrey,
    opacity: 1,
  },
  row: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
  },
  label: fontStyle({
    color: colors.greyDarker,
    fontWeight: fontWeights.semiBold,
    marginRight: 10,
  }),
  detail: fontStyle({
    color: colors.grey,
  }),
});

export default styles;
