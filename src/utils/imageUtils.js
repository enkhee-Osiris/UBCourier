import { Asset } from 'expo';

const loadImages = async (images) => {
  await Asset.loadAsync(images);
};

export default loadImages;
