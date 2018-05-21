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

const navigationState = {
  index: 0,
  routes: [
    { key: 'posts', title: 'Posts' },
    { key: 'reviews', title: 'Reviews' },
  ],
};

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

const updateNavigationIndex = ({ setNavigationState }) => (index) => {
  setNavigationState(state => ({ ...state, index }));
};

const enhance = compose(
  connect(mapStateToProps),
  withUserId,
  withState('isModalVisible', 'toggleModal', false),
  withState('navigationState', 'setNavigationState', navigationState),
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
    updateNavigationIndex,
  }),
);

export default hoistStatics(enhance)(ProfileScreenView);
