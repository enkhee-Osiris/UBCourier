import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  hoistStatics,
} from 'recompose';
import screens from '../../constants/screens';
import { getUserPosts } from '../../modules/posts/selectors';
import PostsScreenView from './PostsScreenView';

const mapStateToProps = ({ posts, auth }) => ({
  posts: getUserPosts(posts, auth.user.uid),
});

const enhance = compose(
  connect(mapStateToProps),
  withHandlers({
    onPress: props => (item) => {
      props.navigation.navigate(screens.PostDetails, { item });
    },
  }),
);

export default hoistStatics(enhance)(PostsScreenView);
