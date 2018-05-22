import { StackNavigator } from 'react-navigation';
import { Settings } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../styles/navOptions';
import headerOptions from '../../styles/stackHeaderOptions';

const SettingsNavigator = StackNavigator({
  [screens.Settings]: {
    screen: Settings,
    navigationOptions: headerOptions(),
  },
}, {
  ...navOptions({
    title: 'Settings',
    icon: 'ios-settings-outline',
  }),
});

export default SettingsNavigator;
