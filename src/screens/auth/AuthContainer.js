import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { NavigationActions } from 'react-navigation';
import { authOperations } from '../../modules/auth';
import screens from '../../constants/screens';
import AuthScreenView from './AuthScreenView';

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const navigationAction = NavigationActions.reset({
  index: 0,
  key: null,
  actions: [NavigationActions.navigate({ routeName: screens.DrawerNavigation })],
});

const enhance = compose(
  connect(mapStateToProps, authOperations),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    onLogInWithFacebook: props => () => {
      props.toggleLoading(true);
      props.logInWithFacebook();
      props.toggleLoading(false);
    },
  }),
  lifecycle({
    componentWillMount() {
      if (this.props.isLoggedIn) {
        this.props.navigation.dispatch(navigationAction);
      }
    },
    componentDidUpdate() {
      if (this.props.isLoggedIn) {
        this.props.navigation.dispatch(navigationAction);
      }
    },
  }),
);

export default enhance(AuthScreenView);
