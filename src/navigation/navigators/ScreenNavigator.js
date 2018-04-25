import { StackNavigator } from 'react-navigation';
import { Screen } from '../../screens';
import screens from '../../constants/screens';
import styles from '../../styles/AppStyles';
// import navOptions from '../../utils/navOptions';

const SettingsNavigator = StackNavigator({
  [screens.Screen]: {
    screen: Screen,
  },
}, {
  ...{
    title: 'Screen',
    // icon: 'settings',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitle: null,
  },
});

export default SettingsNavigator;
