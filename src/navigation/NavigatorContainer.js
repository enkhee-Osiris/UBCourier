import { connect } from 'react-redux';
import { Location, Permissions } from 'expo';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { locationOperations } from '../modules/location';
import { postOperations } from '../modules/posts';
import { userOperations } from '../modules/users';
import { reviewOperations } from '../modules/reviews';
import NavigatorView from './NavigatorView';

const mapStateToProps = ({
  navigator,
  auth,
  storage,
  app,
}) => ({
  navigator,
  auth,
  isReady: storage.isReady && app.isImagesLoaded && app.isFontsLoaded,
  isNetConnected: app.isNetConnected,
});

const askPermissions = () => async () => {
  await Permissions.askAsync(Permissions.LOCATION);
  await Permissions.askAsync(Permissions.CAMERA_ROLL);
};

const listenLocation = ({ dispatch, auth, toggleLocationListen }) => async () => {
  toggleLocationListen(true);
  const options = {
    enableHighAccuracy: true,
    timeInterval: 30000,
    distanceInterval: 100,
  };
  Location.watchPositionAsync(options, (location) => {
    dispatch(locationOperations.updateLocation(auth.user.uid, location.coords));
  });
};

const loadPosts = ({ dispatch }) => async () => {
  await dispatch(postOperations.loadPosts());
};

const loadUsers = ({ dispatch }) => async () => {
  await dispatch(userOperations.loadUsers());
};

const loadReviews = ({ dispatch }) => async () => {
  await dispatch(reviewOperations.loadReviews());
};

const enhance = compose(
  connect(mapStateToProps),
  withState('isLocationListening', 'toggleLocationListen', false),
  withHandlers({
    askPermissions,
    listenLocation,
    loadPosts,
    loadUsers,
    loadReviews,
  }),
  lifecycle({
    componentWillMount() {
      if (this.props.auth.isLoggedIn) {
        this.props.askPermissions();
        this.props.listenLocation();
        this.props.loadPosts();
        this.props.loadUsers();
        this.props.loadReviews();
      }
    },
    componentDidUpdate() {
      if (!this.props.isLocationListening && this.props.auth.isLoggedIn) {
        this.props.askPermissions();
        this.props.listenLocation();
      }
    },
  }),
);

export default enhance(NavigatorView);
