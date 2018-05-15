import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';
import { authOperations } from '../../modules/auth';
import { postOperations } from '../../modules/posts';
import { userOperations } from '../../modules/users';
import screens from '../../constants/screens';
import LoginScreenView from './LoginScreenView';

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const withValidation = withProps(({ email, password }) => ({
  isValid: !!email && !!password && email.length >= 5 && password.length >= 6,
  emailError: !!email && email.length >= 5 ? '' : 'Email must be filled',
  passwordError: !!password && password.length >= 6 ? '' : 'Password must be filled',
}));

const onLogIn = ({
  toggleLoading,
  logIn,
  loadPosts,
  loadUsers,
  email,
  password,
}) => async () => {
  toggleLoading(true);
  const uid = await logIn(email, password);
  if (uid) {
    await loadPosts();
    await loadUsers();
  } else {
    toggleLoading(false);
  }
};

const onRegisterPress = ({ clearError, navigation }) => () => {
  clearError();
  navigation.navigate(screens.Register);
};

const enhance = compose(
  connect(mapStateToProps, { ...authOperations, ...postOperations, ...userOperations }),
  withState('email', 'onEmailChange', ''),
  withState('password', 'onPasswordChange', ''),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    onLogIn,
    onRegisterPress,
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
