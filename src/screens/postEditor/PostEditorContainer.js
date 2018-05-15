import { connect } from 'react-redux';
import { ImagePicker } from 'expo';
import { Keyboard } from 'react-native';
import {
  compose,
  withProps,
  withState,
  withHandlers,
  hoistStatics,
} from 'recompose';
import { uploadImage } from '../../api/firebase';
import { postOperations } from '../../modules/posts';
import PostEditorScreenView from './PostEditorScreenView';
import imagePickIcon from '../../assets/icons/image-pick.png';

const pick = (props, obj) => (
  props.reduce((acc, prop) => ({ ...acc, [prop]: obj[prop] }), {})
);

const mapStateToProps = ({ auth, location }) => ({
  auth,
  currentLocation: location,
});

const withPost = withProps(({ navigation }) => ({
  post: navigation.getParam('post', false),
}));

const withValidation = withProps(({
  name,
  weight,
  volume,
  price,
  imageURL,
}) => ({
  isValid: !!name && name.length > 0
    && !!weight && weight.length > 0
    && !!volume && volume.length > 0
    && !!price && price.length > 0
    && !!imageURL,
}));

const withSubmitEvent = withProps(({ post, createPost, updatePost }) => ({
  submit: post ? updatePost : createPost,
}));

const onImagePick = ({ setImageURL, setImage }) => async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 4],
  });

  if (!result.cancelled) {
    setImage({ uri: result.uri });
    const downloadURL = await uploadImage(result.uri);
    setImageURL(downloadURL);
  }
};

const onSubmit = ({
  submit,
  post,
  navigation,
  setLoading,
  ...props
}) => async () => {
  setLoading(true);
  Keyboard.dismiss();
  const editedProps =
    pick(['name', 'weight', 'volume', 'price', 'imageURL',
      'currentLocation', 'targetLocation', 'isDelivered', 'userId'], props);
  const propsToSubmit = post ? { id: post.id, ...editedProps } : editedProps;
  // Creates post
  await submit(propsToSubmit);
  // Going back to previous screen
  navigation.goBack();
  setLoading(false);
};

const enhance = compose(
  connect(mapStateToProps, postOperations),
  withPost,
  withSubmitEvent,
  withState('isLoading', 'setLoading', false),
  withState('name', 'onNameChange', ({ post }) => post.name),
  withState('weight', 'onWeightChange', ({ post }) => post.weight),
  withState('volume', 'onVolumeChange', ({ post }) => post.volume),
  withState('price', 'onPriceChange', ({ post }) => post.volume || '0'),
  withState('imageURL', 'setImageURL', ({ post }) => post.imageURL),
  withState('image', 'setImage', ({ imageURL }) => (
    imageURL ? { uri: imageURL } : imagePickIcon
  )),
  withState('targetLocation', 'setLocation', ({ post, currentLocation }) => (
    post.targetLocation || currentLocation
  )),
  withProps(({ post, auth }) => ({
    isDelivered: post.isDelivered || false,
    delivererId: post.delivererId,
    userId: auth.user.uid,
  })),
  withHandlers({
    onImagePick,
    onSubmit,
  }),
  withValidation,
);

export default hoistStatics(enhance)(PostEditorScreenView);
