import { connect } from 'react-redux';
import { compose, withState, withHandlers, hoistStatics, withProps, defaultProps } from 'recompose';
import { authOperations } from '../../modules/auth';
import LoginScreenView from './LoginScreenView';

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn,
  error: auth.error,
});

const withValidation = withProps(({ email, password }) => ({
  isValid: !!email && !!password && email.length > 0 && password.length > 0,
}));

const enhance = compose(
  // connect(mapStateToProps, authOperations),
  connect(mapStateToProps, authOperations),
  withState('email', 'onEmailChange', 'osiris'),
  withState('password', 'onPasswordChange', 'aaaa'),
  withState('isLoggedIn', 'toggleLogin', false),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    onLogOut: props => () => {
      props.toggleLoading(true);
      props.logOut();
      props.toggleLogin(false);
      props.toggleLoading(false);
    },
    onLogIn: props => (email, password) => {
      props.toggleLoading(true);
      props.logIn(email, password);
      props.toggleLogin(true);
      props.toggleLoading(false);
    },
    onLogInWithFacebook: props => () => {
      props.toggleLoading(true);
      props.logInWithFacebook();
      props.toggleLogin(true);
      props.toggleLoading(false);
    },
  }),
  withValidation,
);

export default enhance(LoginScreenView);
