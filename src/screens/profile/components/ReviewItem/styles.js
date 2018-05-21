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
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.primary,
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  userDisplayName: fontStyle({
    fontSize: fontSizes.small,
    fontWeight: fontWeights.semiBold,
  }),
  reviewContainer: {
    flex: 1,
  },
  reviewText: fontStyle({
    color: colors.grey,
    fontSize: fontSizes.small,
    fontWeight: fontWeights.light,
  }),
});

export default styles;
