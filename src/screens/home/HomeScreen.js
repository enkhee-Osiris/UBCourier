import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';
import screens from '../../constants/screens';

const Home = ({ navigation }) => (
  <View>
    <Text>Osiris Home Screen</Text>
    <Text>Osiris Home Screen aaa</Text>
    <View>
      <Button
        title="Settings"
        onPress={() => navigation.navigate(screens.Settings)}
      />
      <Button
        title="Screen"
        onPress={() => navigation.navigate(screens.Screen)}
      />
    </View>
  </View>
);

Home.prototype = {
  navigation: PropTypes.object,
};

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
