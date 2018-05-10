import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';
import { authOperations } from '../../modules/auth';
import { postOperations } from '../../modules/post';
import screens from '../../constants/screens';
import RegisterScreenView from './RegisterScreenView';
import { createUserProfile } from '../../api/firebase';
import { defaultUserAvatar } from '../../constants/images';

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const withValidation = withProps(({
  email,
  phoneNumber,
  displayName,
  password,
}) => ({
  isValid: !!email && email.length >= 5
    && !!phoneNumber && phoneNumber.length === 8
    && !!password && password.length >= 6
    && !!displayName && displayName.length > 5,
  emailError: !!email && email.length >= 5 ? '' : 'Email must be filled',
  phoneNumberError: !!phoneNumber && phoneNumber.length === 8 ? '' : 'Phone number must be filled',
  displayNameError: !!displayName && displayName.length > 3 ? '' : 'Display name must be filled',
  passwordError: !!password && password.length >= 6 ? '' : 'Password must be atleast 6 chars',
}));

const onRegister = ({
  toggleLoading,
  registerWithEmailAndPassword,
  logIn,
  loadPosts,
  email,
  phoneNumber,
  displayName,
  password,
}) => async () => {
  toggleLoading(true);
  const uid = await registerWithEmailAndPassword(email, password);
  if (uid) {
    const userProfile = {
      email,
      phoneNumber,
      displayName,
      photoURL: defaultUserAvatar,
    };
    await createUserProfile(uid, userProfile);
    await logIn(email, password);
    await loadPosts();
  } else {
    toggleLoading(false);
  }
};

const onSignInPress = ({ clearError, navigation }) => () => {
  clearError();
  navigation.navigate(screens.Login);
};

const enhance = compose(
  connect(mapStateToProps, { ...authOperations, ...postOperations }),
  withState('email', 'onEmailChange', ''),
  withState('phoneNumber', 'onPhoneNumberChange', ''),
  withState('password', 'onPasswordChange', ''),
  withState('displayName', 'onDisplayNameChange', ''),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    onRegister,
    onSignInPress,
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
