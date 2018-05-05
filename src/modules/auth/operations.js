import {
  facebookToken,
  facebookAuthCredential,
  signInWithFacebookCredential,
  signInWithEmailPassword,
  signOut,
  signUpUserWithEmailAndPassword,
  getUserProfile,
} from '../../api/firebase';
import {
  loggedIn,
  loggedOut,
  errorOccured,
  clearError,
} from './actions';

const logIn = (email, password) => async (dispatch) => {
  await signInWithEmailPassword(email, password)
    .then(async (user) => {
      const profile = await getUserProfile(user.uid);
      dispatch(loggedIn(profile));
    })
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

/**
 * registers user with email and password
 * @param {string} email
 * @param {string} password
 * @returns {string} uid of user
 */
const registerWithEmailAndPassword = (email, password) => async (dispatch) => {
  let uid = null;
  await signUpUserWithEmailAndPassword(email, password)
    .then((user) => { ({ uid } = user); })
    .catch(error => dispatch(errorOccured(error)));

  return uid;
};

export default {
  logIn,
  logOut,
  logInWithFacebook,
  registerWithEmailAndPassword,
  clearError,
};
