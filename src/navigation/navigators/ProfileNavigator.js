import { StackNavigator } from 'react-navigation';
import { Profile, PostDetails, PostEditor } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../styles/navOptions';
import headerOptions from '../../styles/stackHeaderOptions';

const ProfileNavigator = StackNavigator({
  [screens.Profile]: {
    screen: Profile,
    navigationOptions: headerOptions(),
  },
  [screens.PostDetails]: {
    screen: PostDetails,
  },
  [screens.PostEditor]: {
    screen: PostEditor,
  },
}, {
  ...navOptions({
    title: 'My Profile',
    icon: 'ios-person-outline',
  }),
});

export default ProfileNavigator;
