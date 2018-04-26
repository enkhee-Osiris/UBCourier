import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';
import screens from '../../constants/screens';

const Screen = ({ navigation }) => (
  <View>
    <Text>Osiris Screen Screen</Text>
    <View>
      <Button
        title="Settings"
        onPress={() => navigation.navigate(screens.SettingsRoot)}
      />
      <Button
        title="Screen"
        onPress={() => navigation.navigate(screens.ScreenRoot)}
      />
    </View>

  </View>
);

Screen.propTypes = {
  navigation: PropTypes.object,
};

Screen.navigationOptions = {
  title: 'Screen',
};

export default Screen;
