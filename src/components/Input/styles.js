import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontSizes,
  fontWeights,
  fontStyle,
} from '../../styles';

const { indent, verticalIndent } = dimensions;

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalIndent * 2.8,
    paddingLeft: indent,
    borderColor: colors.greyDarker,
    borderWidth: 1,
    borderRadius: 4,
  },
  input: {
    flex: 5,
    color: colors.text,
    fontSize: fontSizes.medium,
    justifyContent: 'center',
    height: '100%',
  },
  icon: {
    paddingLeft: indent / 1.3,
    paddingRight: indent / 1.3,
  },
  label: {
    paddingBottom: indent / 2,
    paddingTop: indent / 2,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
  },
  error: fontStyle({
    fontSize: fontSizes.small,
    color: colors.error,
    fontWeight: fontWeights.bold,
    lineHeight: fontSizes.small,
  }),
  prefix: {
    paddingLeft: indent,
    paddingRight: indent,
    color: colors.primary,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
  },
  isNotValid: {
    borderWidth: 1,
    borderColor: colors.error,
  },
});
