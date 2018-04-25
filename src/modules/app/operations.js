import { Font } from 'expo';

import fonts from '../../constants/fonts';
import images from '../../constants/images';

import loadImgs from '../../utils/imageUtils';
import {
  imagesLoaded,
  fontsLoaded,
} from './actions';

const loadFonts = () => async (dispatch) => {
  try {
    await Font.loadAsync(fonts);
    dispatch(fontsLoaded(true));
  } catch (error) {
    dispatch(fontsLoaded(false));
    console.log(error);
  }
};

const loadImages = () => async (dispatch) => {
  try {
    await loadImgs(images);
    dispatch(imagesLoaded(true));
  } catch (err) {
    dispatch(imagesLoaded(false));
    console.log(err);
  }
};

const loadAssets = () => (dispatch) => {
  dispatch(loadFonts());
  dispatch(loadImages());
};

export default {
  loadAssets,
};
