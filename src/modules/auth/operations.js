import {
  facebookToken,
  facebookAuthCredential,
  signInWithFacebookCredential,
  signInWithEmailPassword,
  signOut,
  signUpUserWithEmailAndPassword,
  createUserProfile,
  getUserProfile,
} from '../../api/firebase';
import {
  loggedIn,
  loggedOut,
  errorOccured,
  clearError,
} from './actions';

/**
 * logs in user with email password
 * @param {string} email
 * @param {string} password
 * @returns {string} uid of user
 */
const logIn = (email, password) => async (dispatch) => {
  let uid = null;

  try {
    await signInWithEmailPassword(email, password)
      .then(async (user) => {
        ({ uid } = user);
        const profile = await getUserProfile(uid);
        dispatch(loggedIn(profile));
      })
      .catch(error => dispatch(errorOccured(error)));
  } catch (e) {
    console.log(e);
  }

  return uid;
};

const logOut = () => async (dispatch) => {
  await signOut()
    .then(() => dispatch(loggedOut))
    .catch(error => dispatch(errorOccured(error)));
};

const logInWithFacebook = () => async (dispatch) => {
  const { type, token } = await facebookToken();
  let uid = null;

  if (type === 'success') {
    const credential = facebookAuthCredential(token);

    await signInWithFacebookCredential(credential)
      .then(async (user) => {
        const userProfile = {
          email: user.email,
          phoneNumber: user.phoneNumber,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        ({ uid } = user);
        await createUserProfile(uid, userProfile);
        dispatch(loggedIn({ ...userProfile, uid }));
      })
      .catch(error => dispatch(errorOccured(error)));
  } else {
    dispatch(errorOccured({ message: 'Facebook login failed' }));
  }

  return uid;
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
