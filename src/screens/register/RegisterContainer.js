import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';
import { authOperations } from '../../modules/auth';
import screens from '../../constants/screens';
import RegisterScreenView from './RegisterScreenView';

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const withValidation = withProps(({ email, password }) => ({
  isValid: !!email && email.length > 0
    && password.length > 0,
  emailError: !!email && email.length > 0 ? '' : 'Email must be filled',
  passwordError: !!password && password.length > 0 ? '' : 'Password must be filled',
}));

const enhance = compose(
  connect(mapStateToProps, authOperations),
  withState('email', 'onEmailChange', ''),
  withState('password', 'onPasswordChange', ''),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    onRegister: props => async (email, password) => {
      await props.toggleLoading(true);
      const isSuccess = await props.registerWithEmailAndPassword(email, password);
      await props.toggleLoading(false);
      if (isSuccess) {
        await props.logIn(email, password);
      }
    },
    onSignInPress: props => () => {
      props.clearError();
      props.navigation.navigate(screens.Login);
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

export default enhance(RegisterScreenView);
