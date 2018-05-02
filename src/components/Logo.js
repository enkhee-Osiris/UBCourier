import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import StylePropType from 'react-style-proptype';
import logo from '../assets/icons/logo.png';

const styles = StyleSheet.create({
  logo: {
    width: 67,
    height: 24,
  },
});

const Logo = ({ containerStyle, style }) => (
  <View style={containerStyle}>
    <Image
      style={[styles.logo, style]}
      source={logo}
    />
  </View>
);

Logo.propTypes = {
  containerStyle: StylePropType,
  style: StylePropType,
};

export default Logo;
