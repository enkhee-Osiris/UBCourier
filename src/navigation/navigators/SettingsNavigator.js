import { StackNavigator } from 'react-navigation';
import { Settings } from '../../screens';
import screens from '../../constants/screens';
import styles from '../../styles/AppStyles';
// import navOptions from '../../utils/navOptions';

const SettingsNavigator = StackNavigator({
  [screens.Settings]: {
    screen: Settings,
  },
}, {
  ...{
    title: 'Settings',
    // icon: 'settings',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitle: null,
  },
});

export default SettingsNavigator;
