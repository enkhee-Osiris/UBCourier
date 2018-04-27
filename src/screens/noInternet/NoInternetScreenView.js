import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import s from './styles';

const NoInternet = ({ isCheckingConnection, onCheckingConnection }) => (
  <View style={[s.root, StyleSheet.absoluteFill]}>
    <Button
      title="Retry"
      loading={isCheckingConnection}
      onPress={() => onCheckingConnection()}
      buttonStyle={s.button}
    />
    <Text style={s.text}>
      No internet connection.
    </Text>
  </View>
);

NoInternet.propTypes = {
  isCheckingConnection: PropTypes.bool,
  onCheckingConnection: PropTypes.func,
};

export default NoInternet;
