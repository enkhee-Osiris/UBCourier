import React from 'react';
import PropTypes from 'prop-types';
import { Button, Platform, Text, View } from 'react-native';
import screens from '../../constants/screens';
import appStyles from '../../styles/AppStyles';

const Settings = ({ navigation }) => (
  <View>
    <View wrapperStyle={appStyles.rowStyle}>
      <Text>Settings screen</Text>
    </View>

    { Platform.select({
      ios: (
        <View>
          <Button
            title="Home"
            onPress={() => navigation.navigate(screens.Home)}
          />
          <Button
            title="Screen"
            onPress={() => navigation.navigate(screens.Screen)}
          />
        </View>
      ),
    }) }
  </View>
);

Settings.propTypes = {
  navigation: PropTypes.object,
};

Settings.navigationOptions = {
  title: 'Settings',
};

export default Settings;
