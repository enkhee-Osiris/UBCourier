import { handleActions } from 'redux-actions';
import { REHYDRATE } from 'redux-persist';

const initialState = { isReady: false };

const storageReducer = handleActions(
  {
    [REHYDRATE]: () => ({
      isReady: true,
    }),
  },
  initialState,
);

export default storageReducer;
