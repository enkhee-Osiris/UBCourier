import { connect } from 'react-redux';
import {
  compose,
  withHandlers,
  hoistStatics,
} from 'recompose';
import screens from '../../constants/screens';
import HomeScreenView from './HomeScreenView';

const mapStateToProps = ({ location }) => ({
  location,
});

const enhance = compose(
  connect(mapStateToProps),
  withHandlers({

  }),
);

export default hoistStatics(enhance)(HomeScreenView);
