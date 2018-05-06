import { connect } from 'react-redux';
import { Location, Permissions } from 'expo';
import { compose, withHandlers, lifecycle } from 'recompose';
import { locationOperations } from '../modules/location';
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

const enhance = compose(
  connect(mapStateToProps),
  withHandlers({
    handleLocation: props => async () => {
      await Permissions.askAsync(Permissions.LOCATION);
      const options = {
        enableHighAccuracy: false,
        timeInterval: 30000,
        distanceInterval: 100,
      };
      Location.watchPositionAsync(options, (location) => {
        props.dispatch(locationOperations.updateLocation(props.auth.user.uid, location.coords));
      });
    },
  }),
  lifecycle({
    componentWillMount() {
      if (this.props.auth.isLoggedIn) {
        this.props.handleLocation();
      }
    },
    componentDidUpdate() {
    },
  }),
);

export default enhance(NavigatorView);
