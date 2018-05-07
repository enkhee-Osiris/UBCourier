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

const pick = (obj, props) => (
  Object.assign({}, ...props.map(prop => ({ [prop]: obj[prop] })))
);

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
  const editedProps = pick(props, 'name', 'weight');
  const propsToSubmit = post ? { id: post.id, ...editedProps } : editedProps;

  submit(propsToSubmit);
  navigation.goBack();
};

const enhance = compose(
  connect(null, postOperations),
  withPost,
  withSubmitEvent,
  withState('name', 'onNameChange', ''),
  withState('weight', 'onWeightChange', ''),
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
