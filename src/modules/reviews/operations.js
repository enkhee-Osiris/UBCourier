import {
  getReviews,
  setReview,
} from '../../api/firebase';
import {
  reviewLoaded,
  reviewCreated,
} from './actions';

const loadReviews = () => async (dispatch) => {
  const reviews = await getReviews();
  dispatch(reviewLoaded(reviews));
};

const createReview = payload => async (dispatch) => {
  try {
    const id = await setReview(payload);
    dispatch(reviewCreated({ ...payload, id }));
  } catch (error) {
    console.log(error);
  }
};

export default {
  loadReviews,
  createReview,
};
