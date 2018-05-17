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
  })),
  withHandlers({
    onPhoneNumberPress,
    onDeliver,
  }),
  lifecycle({
    componentWillMount() {
      console.log(this.props);
    },
  }),
);

export default hoistStatics(enhance)(PostDetailsScreenView);
