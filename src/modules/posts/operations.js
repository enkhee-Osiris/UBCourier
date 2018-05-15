import {
  getPosts,
  setPost,
  modifyPost,
  removePost,
} from '../../api/firebase';
import {
  postLoaded,
  postCreated,
  postUpdated,
  postDeleted,
} from './actions';

const loadPosts = () => async (dispatch) => {
  const posts = await getPosts();
  dispatch(postLoaded(posts));
};

const createPost = payload => async (dispatch) => {
  try {
    const id = await setPost(payload);
    dispatch(postCreated({ ...payload, id }));
  } catch (error) {
    console.log(error);
  }
};

const updatePost = payload => async (dispatch) => {
  await modifyPost(payload)
    .then(() => dispatch(postUpdated(payload)))
    .catch(error => console.log(error));
};

const deletePost = id => async (dispatch) => {
  await removePost(id)
    .then(() => dispatch(postDeleted(id)))
    .catch(error => console.log(error));
};

export default {
  loadPosts,
  createPost,
  updatePost,
  deletePost,
};
