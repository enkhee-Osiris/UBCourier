import { Facebook } from 'expo';
import { FACEBOOK_APP_ID } from '../config/local';
import firebase from '../config/firebase';

export function facebookToken() {
  return Facebook
    .logInWithReadPermissionsAsync(FACEBOOK_APP_ID, { permissions: ['public_profile', 'email'] });
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
 * update user's profile info
 * @param {Object} profile
 * {
 *   displayName: nullable string,
 *   photoURL: nullable string
 * }
 */
export async function createUserProfile(uid, profile) {
  const userRef = await firebase.database().ref(`users/${uid}`);
  return userRef.set(profile);
}

/**
 * get user's profile info
 * @param {string} uid
 * @returns {Object} profile info
 */
export async function getUserProfile(uid) {
  let email;
  let displayName;
  let photoURL;

  const userRef = await firebase.database().ref(`users/${uid}`);
  await userRef.once('value').then((snapshot) => {
    ({ email, displayName, photoURL } = snapshot.val());
  });

  return {
    email,
    displayName,
    photoURL,
    uid,
  };
}

export async function setUserLocation(uid, coords) {
  const locationRef = await firebase.database().ref(`locations/${uid}`);
  return locationRef.set({
    latitude: coords.latitude,
    longitude: coords.longitude,
  });
}
