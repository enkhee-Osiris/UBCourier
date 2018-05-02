import React from 'react';
import PropTypes from 'prop-types';
import StylePropType from 'react-style-proptype';
import { TextInput, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../../styles';
import s from './styles';

const Input = ({
  containerStyle,
  placeholderColor,
  secondContainerStyle,
  containerStyleFocus,
  isNotValidStyle = s.isNotValid,
  icon,
  iconRight,
  rightIconStyle,
  inputRef,
  label,
  error,
  labelStyle,
  prefix,
  style,
  isFocus,
  onFocus,
  onBlur,
  isNotValid,
  isFocusColor = colors.green,
  ...props
}) => (
  <View style={containerStyle}>
    {!!label && <Text style={[s.label, labelStyle]}>{label}</Text>}
    <View
      style={[
        s.root,
        secondContainerStyle,
        isFocus && containerStyleFocus,
        isNotValid && isNotValidStyle,
        error && isNotValidStyle,
      ]}
    >
      {
        !!icon &&
        <Icon
          type="ionicon"
          underlayColor="transparent"
          style={s.icon}
          color={isFocus ? isFocusColor : colors.greyDarker}
          {...icon}
        />
      }
      {!!prefix && <Text style={s.prefix}>{prefix}</Text>}
      <TextInput
        autoCorrect={false}
        placeholderTextColor={placeholderColor || colors.grey}
        underlineColorAndroid={colors.transparent}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
        ref={inputRef}
        style={[s.input, style]}
      />
      {
        !!iconRight &&
        <Icon
          type="ionicon"
          underlayColor="transparent"
          style={[s.icon, rightIconStyle]}
          color={isFocus ? isFocusColor : colors.greyDarker}
          {...iconRight}
        />
      }
    </View>
    {!!error && <Text style={s.error}>{error}</Text>}
  </View>
);

Input.propTypes = {
  containerStyle: StylePropType,
  secondContainerStyle: StylePropType,
  containerStyleFocus: StylePropType,
  isNotValidStyle: StylePropType,
  rightIconStyle: StylePropType,
  placeholderColor: PropTypes.string,
  isFocusColor: PropTypes.string,
  isFocus: PropTypes.bool,
  isNotValid: PropTypes.bool,
  icon: PropTypes.object,
  iconRight: PropTypes.object,
  inputRef: PropTypes.any,
  label: PropTypes.string,
  error: PropTypes.string,
  labelStyle: StylePropType,
  prefix: PropTypes.string,
  style: StylePropType,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
