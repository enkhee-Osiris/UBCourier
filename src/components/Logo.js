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

const Logo = ({ logoStyle }) => (
  <View>
    <Image
      style={[styles.logo, logoStyle]}
      source={logo}
    />
  </View>
);

Logo.propTypes = {
  logoStyle: StylePropType,
};

export default Logo;
