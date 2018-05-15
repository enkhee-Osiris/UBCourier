import React from 'react';
import { NavigationButton } from '../components';
import screens from '../constants/screens';

const headerOptions = () => ({ navigation }) => ({
  headerLeft: <NavigationButton
    iconName="ios-menu-outline"
    onPress={() => navigation.navigate(screens.DrawerOpen)}
  />,
});

export default headerOptions;
