import { setUserLocation } from '../../api/firebase';
import { locationUpdated } from './actions';

const updateLocation = (uid, coords) => async (dispatch) => {
  await setUserLocation(uid, coords)
    .then(() => dispatch(locationUpdated(coords)))
    .catch(error => console.log(error));
};

export default {
  updateLocation,
};
