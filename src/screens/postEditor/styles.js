import { StyleSheet } from 'react-native';
import {
  colors,
  dimensions,
  fontSizes,
  fontWeights,
  fontStyle,
} from '../../styles';

const { indent } = dimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imagePickContainer: {
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePick: {
    width: 100,
    height: 100,
  },
  label: fontStyle({
    paddingTop: 8.5,
    paddingBottom: 0,
    fontSize: fontSizes.verySmall,
    color: colors.grey,
  }),
  inputContainer: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
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
    color: colors.grey,
    fontSize: fontSizes.medium,
  }),
  mapContainer: {
    marginTop: 20,
    width: '100%',
    height: 300,
  },
  map: {
    flex: 1,
  },
  saveButtonContainer: {
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
    height: 45,
    marginVertical: 20,
  },
  saveButtonTitle: fontStyle({
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.verySmall,
    color: colors.greyDarker,
  }),
  saveButton: {
    backgroundColor: colors.transparent,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 5,
  },
  saveButtonDisabled: {
    backgroundColor: colors.lightGrey,
    borderColor: colors.lightGrey,
  },
});

export default styles;
