import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import {
  compose,
  withProps,
  withState,
  withHandlers,
  hoistStatics,
  lifecycle,
} from 'recompose';
import { postOperations } from '../../modules/post';
import PostEditorScreenView from './PostEditorScreenView';

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

const withValidation = withProps(({ name }) => ({
  isValid: !!name && name.length > 0,
}));

const withSubmitEvent = withProps(({ post, createPost, updatePost }) => ({
  submit: post ? updatePost : createPost,
}));

const onSubmit = ({
  submit,
  post,
  navigation,
  ...props
}) => () => {
  Keyboard.dismiss();
  const editedProps =
    pick(['name', 'weight', 'volume', 'price', 'imageURL',
      'currentLocation', 'targetLocation', 'delivererId', 'isDelivered', 'userId'], props);
  const propsToSubmit = post ? { id: post.id, ...editedProps } : editedProps;

  console.log(propsToSubmit);

  // submit(propsToSubmit);
  // navigation.goBack();
};

const enhance = compose(
  connect(mapStateToProps, postOperations),
  withPost,
  withSubmitEvent,
  withState('name', 'onNameChange', ({ post }) => post.name),
  withState('weight', 'onWeightChange', ({ post }) => post.weight),
  withState('volume', 'onVolumeChange', ({ post }) => post.volume),
  withState('price', 'onPriceChange', ({ post }) => post.volume || 0),
  withState('imageURL', 'setImageURL', ({ post }) => post.imageURL),
  withState('targetLocation', 'setLocation', ({ post, currentLocation }) => (
    post.targetLocation || currentLocation
  )),
  withProps(({ post, auth }) => ({
    isDelivered: post.isDelivered || false,
    delivererId: post.delivererId,
    userId: auth.user.uid,
  })),
  withHandlers({
    onSubmit,
  }),
  lifecycle({
    componentWillMount() {
      console.log(this.props);
    },
  }),
  withValidation,
);

export default hoistStatics(enhance)(PostEditorScreenView);
