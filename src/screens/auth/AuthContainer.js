import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { authOperations } from '../../modules/auth';
import screens from '../../constants/screens';
import AuthScreenView from './AuthScreenView';

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const enhance = compose(
  connect(mapStateToProps, authOperations),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    onLogInWithFacebook: props => async () => {
      props.toggleLoading(true);
      await props.logInWithFacebook();
    },
    onRegisterPress: props => () => {
      props.clearError();
      props.navigation.navigate(screens.Register);
    },
    onSignInPress: props => () => {
      props.clearError();
      props.navigation.navigate(screens.Login);
    },
  }),
  lifecycle({
    componentWillMount() {
      if (this.props.isLoggedIn) {
        this.props.navigation.navigate(screens.DrawerNavigation);
      }
    },
    componentDidUpdate() {
      if (this.props.isLoggedIn) {
        this.props.navigation.navigate(screens.DrawerNavigation);
      }
    },
  }),
);

export default enhance(AuthScreenView);
