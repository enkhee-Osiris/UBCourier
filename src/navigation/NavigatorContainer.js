import { connect } from 'react-redux';
import NavigatorView from './NavigatorView';

const NavigatorContainer = connect(({ navigator, storage, app }) => ({
  navigator,
  isReady: storage.isReady && app.isImagesLoaded && app.isFontsLoaded,
  isNetConnected: app.isNetConnected,
}))(NavigatorView);

export default NavigatorContainer;
