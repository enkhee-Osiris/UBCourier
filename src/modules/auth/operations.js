import {
  facebookToken,
  facebookAuthCredential,
  signInWithFacebookCredential,
  signInWithEmailPassword,
  signOut,
  signUpUserWithEmailAndPassword,
} from '../../api/firebase';
import {
  loggedIn,
  loggedOut,
  errorOccured,
  clearError,
} from './actions';

const logIn = (email, password) => async (dispatch) => {
  await signInWithEmailPassword(email, password)
    .then(user => dispatch(loggedIn(user)))
    .catch(error => dispatch(errorOccured(error)));
};

const logOut = () => async (dispatch) => {
  await signOut()
    .then(() => dispatch(loggedOut))
    .catch(error => dispatch(errorOccured(error)));
};

const logInWithFacebook = () => async (dispatch) => {
  const { type, token } = await facebookToken();

  if (type === 'success') {
    const credential = facebookAuthCredential(token);

    await signInWithFacebookCredential(credential)
      .then(user => dispatch(loggedIn(user)))
      .catch(error => dispatch(errorOccured(error)));
  } else {
    dispatch(errorOccured({ message: 'Facebook login failed' }));
  }
};

const registerWithEmailAndPassword = (email, password) => async (dispatch) => {
  let isSuccess = true;
  await signUpUserWithEmailAndPassword(email, password)
    .catch((error) => {
      dispatch(errorOccured(error));
      isSuccess = false;
    });

  return isSuccess;
};

export default {
  logIn,
  logOut,
  logInWithFacebook,
  registerWithEmailAndPassword,
  clearError,
};
