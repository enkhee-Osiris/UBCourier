import { connect } from 'react-redux';
import {
  compose,
  withState,
  withHandlers,
  hoistStatics,
  lifecycle,
} from 'recompose';
import { postOperations } from '../../modules/post';
import screens from '../../constants/screens';
import PostsScreenView from './PostsScreenView';

const mapStateToProps = ({ posts }) => ({
  posts,
});

const enhance = compose(
  connect(mapStateToProps, postOperations),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    onPress: props => (item) => {
      props.navigation.navigate(screens.PostDetail, { item });
    },
  }),
  lifecycle({
    // TODO add firebase listeners
    async componentWillMount() {
      this.props.toggleLoading(true);
      await this.props.loadPosts();
      this.props.toggleLoading(false);
    },
  }),
);

export default hoistStatics(enhance)(PostsScreenView);
