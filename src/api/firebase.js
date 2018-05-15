import { Facebook } from 'expo';
import uuid from 'uuid';
import { FACEBOOK_APP_ID } from '../config/local';
import firebase from '../config/firebase';
import { createPost } from '../modules/posts/reducers';

/**
 * User
 */

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

export async function uploadImage(uri) {
  let downloadURL = '';
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = firebase
    .storage()
    .ref('posts/')
    .child(uuid.v4());

  await ref.put(blob).then((snapshot) => {
    ({ downloadURL } = snapshot);
  });

  return downloadURL;
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

/**
 * Location
 */

export async function setUserLocation(uid, coords) {
  const locationRef = await firebase.database().ref(`locations/${uid}`);

  return locationRef.set({
    latitude: coords.latitude,
    longitude: coords.longitude,
  });
}

/**
 * Post
 */

export async function getPosts() {
  const posts = [];
  const postRef = await firebase.database().ref('posts/');
  await postRef.orderByChild('isDelivered').equalTo(false).once('value').then((snapshot) => {
    snapshot.forEach((snap) => {
      const post = createPost({ ...snap.val(), id: snap.key });
      posts.push(post);
    });
  });

  return posts;
}

export async function setPost(post) {
  const postRef = await firebase.database().ref('posts/');
  const newPostRef = postRef.push();
  await newPostRef.set(post);

  return newPostRef.key;
}

export async function modifyPost({ id, ...payload }) {
  const postRef = await firebase.database().ref(`posts/${id}`);

  return postRef.update(payload);
}

export async function removePost(id) {
  const postRef = await firebase.database().ref(`posts/${id}`);

  return postRef.remove();
}
