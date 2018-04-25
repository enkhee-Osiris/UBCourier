import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Platform } from 'react-native';
import colors from '../../styles/colors';

import { dimensions } from '../../styles';

const styles = StyleSheet.create({
  titleContainerStyle: {
    height: Platform.OS === 'android' ? 66 : 86,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingLeft: dimensions.indent,
    paddingBottom: dimensions.indent,
  },
});

const Drawer = ({ navigation }) => (
  <View style={{ backgroundColor: 'black' }}>
    <View style={styles.titleContainerStyle}>
      <Text style={{ color: 'red' }}>Osiris Drawer</Text>
    </View>
  </View>
);

Drawer.propTypes = {
  navigation: PropTypes.object,
};

export default Drawer;
