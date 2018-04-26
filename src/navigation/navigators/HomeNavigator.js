import { StackNavigator } from 'react-navigation';
import { Home } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../styles/navOptions';

const TrendsNavigator = StackNavigator({
  [screens.Home]: {
    screen: Home,
  },
}, {
  ...navOptions({
    title: 'Home',
    icon: 'ios-home-outline',
  }),
});

export default TrendsNavigator;
