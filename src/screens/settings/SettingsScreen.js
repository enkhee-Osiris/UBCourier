import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import appStyles from '../../styles/AppStyles';

const Settings = () => (
  <View style={[appStyles.rowStyle, appStyles.containerStyle]}>
    <Text>Settings screen</Text>
  </View>
);

Settings.propTypes = {
  // navigation: PropTypes.object,
};

Settings.navigationOptions = {
  title: 'Settings',
};

export default Settings;
