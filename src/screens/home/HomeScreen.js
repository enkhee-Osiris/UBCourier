import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text } from 'react-native';
import screens from '../../constants/screens';

const Home = ({ navigation }) => (
  <View>
    <Text>Osiris Home Screen</Text>
    <Text>Osiris Home Screen aaa</Text>
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

Home.propTypes = {
  navigation: PropTypes.object,
};

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
