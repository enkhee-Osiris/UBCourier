import { connect } from 'react-redux';
import {
  compose,
  withProps,
  withState,
  withHandlers,
  hoistStatics,
  lifecycle,
} from 'recompose';
import { postOperations } from '../../modules/posts';
import PostDetailsScreenView from './PostDetailsScreenView';

const withPost = withProps(({ navigation }) => ({
  post: navigation.getParam('post'),
}));

const enhance = compose(
  connect(null, postOperations),
  withPost,
  withHandlers({
  }),
  lifecycle({
    componentWillMount() {
      console.log(this.props);
    },
  }),
);

export default hoistStatics(enhance)(PostDetailsScreenView);
