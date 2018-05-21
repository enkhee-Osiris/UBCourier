import { connect } from 'react-redux';
import {
  compose,
  withProps,
  withState,
  withHandlers,
  hoistStatics,
} from 'recompose';
import screens from '../../constants/screens';
import ProfileScreenView from './ProfileScreenView';
import { defaultUserAvatar } from '../../constants/images';
import {
  getReviewsForUser,
  getAvaragePointOfUser,
} from '../../modules/reviews/selectors';
import {
  getUserPosts,
  getTotalDeliveriesOfUser,
} from '../../modules/posts/selectors';


const mapStateToProps = ({
  auth,
  posts,
  users,
  reviews,
}) => ({
  auth,
  posts,
  reviews,
  usersEntities: users.byId,
});

const withUserId = withProps(({ auth, navigation }) => ({
  userId: navigation.getParam('userId', auth.user.uid),
}));

const enhance = compose(
  connect(mapStateToProps),
  withUserId,
  withState('isModalVisible', 'toggleModal', false),
  withProps(({
    posts,
    reviews,
    userId,
    usersEntities,
  }) => ({
    userDisplayName: usersEntities[userId].displayName || 'Account deleted',
    userPhotoURL: usersEntities[userId].photoURL || defaultUserAvatar,
    userPosts: getUserPosts(posts, userId),
    userReviews: getReviewsForUser(reviews, userId),
    userTotalDeliveries: getTotalDeliveriesOfUser(posts, userId),
    userAvaragePoint: getAvaragePointOfUser(reviews, userId),
  })),
  withHandlers({
    onPostPress: props => (post) => {
      props.navigation.navigate(screens.PostDetails, { post });
    },
  }),
);

export default hoistStatics(enhance)(ProfileScreenView);
