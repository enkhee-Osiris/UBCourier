import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontSizes,
  fontWeights,
  fontStyle,
} from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  userDetailContainer: {
    alignItems: 'center',
    paddingVertical: dimensions.halfIndent,
  },
  userPhoto: {
    borderRadius: 75,
    borderWidth: 2,
    borderColor: colors.primary,
    width: 150,
    height: 150,
    marginBottom: dimensions.halfIndent,
  },
  userDisplayName: fontStyle({
    fontSize: fontSizes.xmedium,
    fontWeight: fontWeights.semiBold,
  }),
  userDetails: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: dimensions.halfIndent,
    justifyContent: 'space-between',
  },
  userDetail: fontStyle({
    fontSize: fontSizes.medium,
  }),
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabViewContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default styles;
