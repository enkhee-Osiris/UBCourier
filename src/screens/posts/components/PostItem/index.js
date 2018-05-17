import { connect } from 'react-redux';
import { compose, withProps, withHandlers, pure } from 'recompose';
import PostItem from './PostItem';
import screens from '../../../../constants/screens';
import { defaultUserAvatar } from '../../../../constants/images';

const mapStateToProps = ({ users }) => ({
  usersEntities: users.byId,
});

const enhance = compose(
  connect(mapStateToProps),
  withProps(({ usersEntities, userId }) => ({
    // TODO this will throw exception
    userDisplayName: usersEntities[userId].displayName || 'Account deleted',
    userPhotoURL: usersEntities[userId].photoURL || defaultUserAvatar,
  })),
  withHandlers({
    onUserPress: props => (userId) => {
      // TODO change userprofile screen
      props.navigation.navigate(screens.PostDetails, { userId });
    },
  }),
);

export default enhance(pure(PostItem));
