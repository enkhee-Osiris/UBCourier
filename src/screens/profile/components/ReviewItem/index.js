import { connect } from 'react-redux';
import { compose, withProps, pure } from 'recompose';
import ReviewItem from './ReviewItem';
import { defaultUserAvatar } from '../../../../constants/images';

const mapStateToProps = ({ users }) => ({
  usersEntities: users.byId,
});

const enhance = compose(
  connect(mapStateToProps),
  withProps(({ usersEntities, reviewerId }) => ({
    // TODO this will throw exception
    userDisplayName: usersEntities[reviewerId].displayName || 'Account deleted',
    userPhotoURL: usersEntities[reviewerId].photoURL || defaultUserAvatar,
  })),
);

export default enhance(pure(ReviewItem));
