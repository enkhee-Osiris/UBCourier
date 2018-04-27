import { connect } from 'react-redux';
import { NetInfo } from 'react-native';
import { compose, withState, withHandlers } from 'recompose';
import NoInternetScreenView from './NoInternetScreenView';
import { appOperations } from '../../modules/app';

const onCheckingConnection = ({ toggleCheckingConnection, dispatch }) => async () => {
  toggleCheckingConnection(true);
  await NetInfo.getConnectionInfo().then((connectionInfo) => {
    dispatch(appOperations.netInfoChanged(connectionInfo.type !== 'none'));
    toggleCheckingConnection(false);
  });
};

const enhance = compose(
  connect(),

  withState('isCheckingConnection', 'toggleCheckingConnection', false),
  withHandlers({
    onCheckingConnection,
  }),
);

export default enhance(NoInternetScreenView);
