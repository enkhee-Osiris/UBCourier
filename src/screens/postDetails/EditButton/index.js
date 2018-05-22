import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { NavigationButton } from '../../../components';
import screens from '../../../constants/screens';
import { colors } from '../../../styles';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const enhance = compose(
  connect(mapStateToProps),
  withProps(({ navigation, auth }) => {
    const post = navigation.getParam('post');

    return {
      post,
      isVisible: (post.userId === auth.user.uid && !post.delivererId),
      tintColor: colors.grey,
      iconName: 'ios-create-outline',
      onPress: () => navigation.navigate(screens.PostEditor, { post }),
    };
  }),
);

export default enhance(NavigationButton);
