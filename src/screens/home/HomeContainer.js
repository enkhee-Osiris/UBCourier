import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  hoistStatics,
} from 'recompose';
import { getPostsExceptUser } from '../../modules/posts/selectors';
import screens from '../../constants/screens';
import HomeScreenView from './HomeScreenView';

const mapStateToProps = ({ location, auth, posts }) => ({
  location,
  posts: getPostsExceptUser(posts, auth.user.uid),
});

const enhance = compose(
  connect(mapStateToProps),
  withHandlers({
    onMarkerPress: props => (post) => {
      props.navigation.navigate(screens.PostDetails, { post });
    },
  }),
);

export default hoistStatics(enhance)(HomeScreenView);
