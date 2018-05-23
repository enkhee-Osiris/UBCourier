import { StackNavigator } from 'react-navigation';
import {
  Deliveries,
  PostEditor,
  PostDetails,
  Profile,
} from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../styles/navOptions';
import headerOptions from '../../styles/stackHeaderOptions';

const DeliveryNavigator = StackNavigator({
  [screens.Deliveries]: {
    screen: Deliveries,
    navigationOptions: headerOptions(),
  },
  [screens.PostDetails]: {
    screen: PostDetails,
  },
  [screens.Profile]: {
    screen: Profile,
  },
}, {
  ...navOptions({
    title: 'My Deliveries',
    icon: 'ios-bicycle-outline',
  }),
});

export default DeliveryNavigator;
