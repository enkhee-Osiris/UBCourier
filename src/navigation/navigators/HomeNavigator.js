import { StackNavigator } from 'react-navigation';
import {
  Home,
  PostEditor,
  PostDetails,
} from '../../screens';
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
  [screens.PostDetails]: {
    screen: PostDetails,
  },
}, {
  ...navOptions({
    title: 'Home',
    icon: 'ios-home-outline',
  }),
});

export default HomeNavigator;
