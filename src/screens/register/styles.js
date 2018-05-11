import { StyleSheet } from 'react-native';
import {
  colors,
  fontSizes,
  fontWeights,
  fontStyle,
} from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  backButton: {
    flex: 1,
    padding: 0,
  },
  registerText: fontStyle({
    flex: 3,
    color: colors.greyDarker,
    fontWeight: fontWeights.heavy,
    fontSize: fontSizes.big,
  }),
  container: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    marginVertical: 10,
    height: 45,
    width: '100%',
    alignSelf: 'stretch',
  },
  inputContainerFocus: {
    borderBottomColor: colors.green,
  },
  inputIsNotValid: {
    borderBottomColor: colors.error,
  },
  inputStyle: fontStyle({
    marginLeft: 10,
    color: colors.grey,
    fontSize: fontSizes.medium,
  }),
  error: fontStyle({
    height: 60,
    fontSize: fontSizes.small,
    color: colors.error,
    textAlign: 'center',
  }),
  signInContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: fontStyle({
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.verySmall,
    color: colors.grey,
  }),
  navigator: fontStyle({
    fontWeight: fontWeights.semiBold,
    fontSize: fontSizes.verySmall,
    color: colors.drakGrey,
  }),
  registerButtonContainer: {
    width: 250,
    height: 45,
    margin: 0,
    marginVertical: 20,
  },
  registerButton: {
    backgroundColor: colors.transparent,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default styles;
