import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import { Drawer } from '../components';
import Routes from './RootRoutes';
import screens from '../constants/screens';
import { LoginNavigator } from './navigators';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

const drawerConfig = {
  contentComponent: Drawer,
};

const DrawerNavigation = DrawerNavigator(Routes, drawerConfig);

export default StackNavigator({
  [screens.LoginNavigation]: { screen: LoginNavigator },
  [screens.DrawerNavigation]: { screen: DrawerNavigation },
}, {
  headerMode: 'none',
  title: 'Main',
  transitionConfig: noTransitionConfig,
});
