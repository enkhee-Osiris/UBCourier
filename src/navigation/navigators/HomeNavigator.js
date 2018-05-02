import { StackNavigator } from 'react-navigation';
import { Home } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../styles/navOptions';
import headerOptions from '../../styles/stackHeaderOptions';

const HomeNavigator = StackNavigator({
  [screens.Home]: {
    screen: Home,
    navigationOptions: headerOptions(),
  },
}, {
  ...navOptions({
    title: 'Home',
    icon: 'ios-home-outline',
  }),
});

export default HomeNavigator;
