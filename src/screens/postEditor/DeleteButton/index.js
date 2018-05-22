import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { NavigationButton } from '../../../components';
import { postOperations } from '../../../modules/posts';
import { colors } from '../../../styles';

const enhance = compose(
  connect(null, postOperations),
  withProps(({ navigation, deletePost }) => {
    const post = navigation.getParam('post');

    const onPress = async (postId) => {
      await deletePost(postId);
      navigation.pop(2);
    };

    return {
      post,
      isVisible: !!post,
      tintColor: colors.red,
      iconName: 'ios-trash-outline',
      onPress: () => onPress(post.id),
    };
  }),
);

export default enhance(NavigationButton);
