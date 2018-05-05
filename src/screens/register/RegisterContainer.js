import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';
import { authOperations } from '../../modules/auth';
import screens from '../../constants/screens';
import RegisterScreenView from './RegisterScreenView';
import { createUserProfile } from '../../api/firebase';
import { defaultUserAvatar } from '../../constants/images';

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const withValidation = withProps(({ email, displayName, password }) => ({
  isValid: !!email && email.length > 0
    && !!password && password.length > 6
    && !!displayName && displayName.length > 5,
  emailError: !!email && email.length > 0 ? '' : 'Email must be filled',
  displayNameError: !!displayName && displayName.length > 5 ? '' : 'Display name must be filled',
  passwordError: !!password && password.length > 6 ? '' : 'Password must be 6 characters long',
}));

const enhance = compose(
  connect(mapStateToProps, authOperations),
  withState('email', 'onEmailChange', ''),
  withState('password', 'onPasswordChange', ''),
  withState('displayName', 'onDisplayNameChange', ''),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    onRegister: props => async (email, displayName, password) => {
      props.toggleLoading(true);
      const uid = await props.registerWithEmailAndPassword(email, password);
      props.toggleLoading(false);
      if (uid) {
        const userProfile = {
          displayName,
          photoURL: defaultUserAvatar,
        };
        await createUserProfile(uid, userProfile);
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
