import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  hoistStatics,
} from 'recompose';
import screens from '../../constants/screens';
import { getUserDeliveries } from '../../modules/posts/selectors';
import DeliveriesScreenView from './DeliveriesScreenView';

const mapStateToProps = ({ posts, auth }) => ({
  deliveries: getUserDeliveries(posts, auth.user.uid),
});

const enhance = compose(
  connect(mapStateToProps),
  withHandlers({
    onPress: props => (post) => {
      props.navigation.navigate(screens.PostDetails, { post });
    },
  }),
);

export default hoistStatics(enhance)(DeliveriesScreenView);
