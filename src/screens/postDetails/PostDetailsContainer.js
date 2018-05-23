import { connect } from 'react-redux';
import { Linking } from 'react-native';
import {
  compose,
  withProps,
  withState,
  withHandlers,
  hoistStatics,
  lifecycle,
} from 'recompose';
import { defaultUserAvatar } from '../../constants/images';
import { postOperations } from '../../modules/posts';
import PostDetailsScreenView from './PostDetailsScreenView';
import screens from '../../constants/screens';

const mapStateToProps = ({ auth, location, users }) => ({
  auth,
  location,
  usersEntities: users.byId,
});

const withPost = withProps(({ navigation }) => ({
  post: navigation.getParam('post'),
}));

const onPhoneNumberPress = ({ userPhoneNumber }) => () => {
  Linking.openURL(`tel:${userPhoneNumber}`);
};

const onUserPress = ({
  navigation,
  post,
}) => () => {
  navigation.navigate(screens.Profile, { userId: post.userId });
};

const onDeliver = ({
  auth,
  post,
  navigation,
  updatePost,
  setLoading,
}) => async () => {
  setLoading(true);
  const payload = { id: post.id, delivererId: auth.user.uid };
  await updatePost(payload);
  setLoading(false);
  navigation.goBack();
};

const onDelivered = ({
  post,
  navigation,
  updatePost,
  setLoading,
}) => async () => {
  setLoading(true);
  const payload = { id: post.id, isDelivered: true };
  await updatePost(payload);
  setLoading(false);
  navigation.goBack();
};

const enhance = compose(
  connect(mapStateToProps, postOperations),
  withPost,
  withState('isLoading', 'setLoading', false),
  withProps(({ usersEntities, post, auth }) => ({
    // TODO this will throw exception
    userDisplayName: usersEntities[post.userId].displayName || 'Account deleted',
    userPhoneNumber: usersEntities[post.userId].phoneNumber || '----',
    userPhotoURL: usersEntities[post.userId].photoURL || defaultUserAvatar,
    isMyPost: post.userId === auth.user.uid,
    isMyDelivery: post.delivererId === auth.user.uid,
  })),
  withHandlers({
    onPhoneNumberPress,
    onUserPress,
    onDeliver,
    onDelivered,
  }),
  lifecycle({
    componentWillMount() {
      // console.log(this.props);
    },
  }),
);

export default hoistStatics(enhance)(PostDetailsScreenView);
