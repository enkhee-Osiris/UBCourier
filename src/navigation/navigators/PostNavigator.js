import { StackNavigator } from 'react-navigation';
import {
  Posts,
  PostEditor,
  PostDetails,
  Profile,
} from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../styles/navOptions';
import headerOptions from '../../styles/stackHeaderOptions';

const PostNavigator = StackNavigator({
  [screens.Posts]: {
    screen: Posts,
    navigationOptions: headerOptions(),
  },
  [screens.PostEditor]: {
    screen: PostEditor,
  },
  [screens.PostDetails]: {
    screen: PostDetails,
  },
  [screens.Profile]: {
    screen: Profile,
  },
}, {
  ...navOptions({
    title: 'My Posts',
    icon: 'ios-mail-outline',
  }),
});

export default PostNavigator;
