import { Facebook } from 'expo';
import { FACEBOOK_APP_ID } from '../config/local';
import firebase from '../config/firebase';

export function facebookToken() {
  return Facebook
    .logInWithReadPermissionsAsync(FACEBOOK_APP_ID, { permissions: ['public_profile'] });
}

export function facebookAuthCredential(token) {
  return firebase.auth.FacebookAuthProvider.credential(token);
}

export function signInWithFacebookCredential(credential) {
  return firebase.auth().signInWithCredential(credential);
}

export function signInWithEmailPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return firebase.auth().signOut();
}

export function signUpUserWithEmailAndPassword(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

/**
 * update current user's profile info
 * @param {Object} profile
 * {
 *   displayName: nullable string,
 *   photoURL: nullable string
 * }
 */
export function createUserProfile(uid, profile) {
  const userRef = firebase.database().ref(`users/${uid}`);
  return userRef.set(profile);
}
