import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';
import { authOperations } from '../../modules/auth';
import screens from '../../constants/screens';
import LoginScreenView from './LoginScreenView';

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const withValidation = withProps(({ email, password }) => ({
  isValid: !!email && !!password && email.length > 0 && password.length > 0,
  emailError: !!email && email.length > 0 ? '' : 'Email must be filled',
  passwordError: !!password && password.length > 0 ? '' : 'Password must be filled',
}));

const enhance = compose(
  connect(mapStateToProps, authOperations),
  withState('email', 'onEmailChange', ''),
  withState('password', 'onPasswordChange', ''),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    onLogIn: props => async (email, password) => {
      props.toggleLoading(true);
      await props.logIn(email, password);
      props.toggleLoading(false);
    },
    onRegisterPress: props => () => {
      props.clearError();
      props.navigation.navigate(screens.Register);
    },
  }),
  withValidation,
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

export default enhance(LoginScreenView);
