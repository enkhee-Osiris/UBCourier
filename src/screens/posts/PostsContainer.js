import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  hoistStatics,
} from 'recompose';
import screens from '../../constants/screens';
import PostsScreenView from './PostsScreenView';

const mapStateToProps = ({ posts }) => ({
  posts,
});

const enhance = compose(
  connect(mapStateToProps),
  withHandlers({
    onPress: props => (item) => {
      props.navigation.navigate(screens.PostDetail, { item });
    },
  }),
);

export default hoistStatics(enhance)(PostsScreenView);
