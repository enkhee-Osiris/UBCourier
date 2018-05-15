import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { authOperations } from '../../modules/auth';
import { postOperations } from '../../modules/posts';
import screens from '../../constants/screens';
import AuthScreenView from './AuthScreenView';

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const onLogInWithFacebook = ({
  toggleLoading,
  logInWithFacebook,
  loadPosts,
}) => async () => {
  toggleLoading(true);
  const uid = await logInWithFacebook();
  if (uid) {
    await loadPosts();
  } else {
    toggleLoading(false);
  }
};

const onRegisterPress = ({ clearError, navigation }) => () => {
  clearError();
  navigation.navigate(screens.Register);
};

const onSignInPress = ({ clearError, navigation }) => () => {
  clearError();
  navigation.navigate(screens.Login);
};

const enhance = compose(
  connect(mapStateToProps, { ...authOperations, ...postOperations }),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    onLogInWithFacebook,
    onRegisterPress,
    onSignInPress,
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
