import { StackNavigator } from 'react-navigation';
import { Screen } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../styles/navOptions';

const ScreenNavigator = StackNavigator({
  [screens.Screen]: {
    screen: Screen,
  },
}, {
  ...navOptions({
    title: 'Screen',
    icon: 'ios-image-outline',
  }),
});

export default ScreenNavigator;
