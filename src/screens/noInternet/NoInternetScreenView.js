import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
/* import Icon from 'react-native-vector-icons/FontAwesome';*/
import { colors } from '../../styles';
import s from './styles';

const NoInternet = ({ isCheckingConnection, onCheckingConnection }) => (
  <View style={[s.root, StyleSheet.absoluteFill]}>
    <Button
      title='LOG IN'
      buttonStyle={{backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
      containerStyle={{marginVertical: 10, height: 50, width: 250 }}
      titleStyle={{fontWeight: 'bold'}}
    />
    <Button
      title="Outline Button"
      buttonStyle={{backgroundColor: 'white', borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 1}}
      titleStyle={{color: 'rgba(78, 116, 289, 1)'}}
    />
    <Button
      title="Retry"
      loading={isCheckingConnection}
      onPress={() => onCheckingConnection()}
      titleStyle={{color: 'rgba(78, 116, 289, 1)'}}
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
