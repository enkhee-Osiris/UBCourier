import { colors } from './index';

const fontWeights = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
};

const fontStyle = (styles = {}) => {
  const { fontWeight } = { fontWeight: '400', ...styles };
  const family = `Montserrat-${fontWeights[fontWeight]}`;

  return ({
    fontFamily: family,
    fontWeight,
    color: colors.primary,
    ...styles,
  });
};

export default fontStyle;
