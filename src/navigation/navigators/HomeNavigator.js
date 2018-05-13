import { StackNavigator } from 'react-navigation';
import { Home, PostEditor } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../styles/navOptions';
import headerOptions from '../../styles/stackHeaderOptions';

const HomeNavigator = StackNavigator({
  [screens.Home]: {
    screen: Home,
    navigationOptions: headerOptions(),
  },
  [screens.PostEditor]: {
    screen: PostEditor,
  },
}, {
  ...navOptions({
    title: 'Home',
    icon: 'ios-home-outline',
  }),
});

export default HomeNavigator;
