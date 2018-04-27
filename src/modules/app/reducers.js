import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  isImagesLoaded: false,
  isFontsLoaded: false,
  isNetConnected: false,
};

const appReducer = handleActions(
  {
    [types.IMAGES_LOADED]: (state, { payload }) => ({
      ...state,
      isImagesLoaded: payload,
    }),
    [types.FONTS_LOADED]: (state, { payload }) => ({
      ...state,
      isFontsLoaded: payload,
    }),
    [types.NET_INFO_CHANGED]: (state, { payload }) => ({
      ...state,
      isNetConnected: payload,
    }),
  },
  initialState,
);

export default appReducer;
