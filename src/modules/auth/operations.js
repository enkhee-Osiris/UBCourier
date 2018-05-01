import { Facebook } from 'expo';
import firebase from '../../config/firebase';
import { FACEBOOK_APP_ID } from '../../config/local';
import {
  loggedIn,
  loggedOut,
  errorOccured,
} from './actions';

const logIn = (email, password) => async (dispatch) => {
  await firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => (dispatch(loggedIn(user))))
    .catch(error => (dispatch(errorOccured(error))));
};

const logOut = () => async (dispatch) => {
  await firebase.auth()
    .signOut()
    .then(() => (dispatch(loggedOut)))
    .catch(error => (dispatch(errorOccured(error))));
};

const logInWithFacebook = () => async (dispatch) => {
  const { type, token } = await Facebook
    .loginwithreadpermissionsasync(FACEBOOK_APP_ID, { permissions: ['public_profile'] });

  if (type === 'success') {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    await firebase.auth()
      .signInWithCredential(credential)
      .then(user => (dispatch(loggedIn(user))))
      .catch(error => (dispatch(errorOccured(error))));
  }
  dispatch(loggedIn({ email: 'enkhee.ag', uid: '123' }));
};

export default {
  logIn,
  logOut,
  logInWithFacebook,
};
