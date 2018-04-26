import { createActions } from 'redux-actions';
import types from './types';

export const { imagesLoaded, fontsLoaded, netInfoChanged } = createActions(
  types.IMAGES_LOADED,
  types.FONTS_LOADED,
  types.NET_INFO_CHANGED,
);
