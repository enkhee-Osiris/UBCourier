import { connect } from 'react-redux';
import {
  compose,
  withProps,
  withState,
  withHandlers,
  hoistStatics,
} from 'recompose';
import screens from '../../constants/screens';
import { getUserPosts } from '../../modules/posts/selectors';
import ProfileScreenView from './ProfileScreenView';
import { defaultUserAvatar } from '../../constants/images';

const mapStateToProps = ({
  auth,
  posts,
  users,
}) => ({
  auth,
  posts,
  usersEntities: users.byId,
});

const withUserId = withProps(({ auth, navigation }) => ({
  userId: navigation.getParam('userId', auth.user.uid),
}));

const enhance = compose(
  connect(mapStateToProps),
  withUserId,
  withState('isModalVisible', 'toggleModal', false),
  withProps(({ posts, userId, usersEntities }) => ({
    userDisplayName: usersEntities[userId].displayName || 'Account deleted',
    userPhotoURL: usersEntities[userId].photoURL || defaultUserAvatar,
    userPosts: getUserPosts(posts, userId),
  })),
  withHandlers({
    onPostPress: props => (post) => {
      props.navigation.navigate(screens.PostDetails, { post });
    },
  }),
);

export default hoistStatics(enhance)(ProfileScreenView);
