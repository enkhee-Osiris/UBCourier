import React, { Component } from 'react';
import { AppRegistry, NetInfo, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { persistor, store } from './src/store';
import Navigator from './src/navigation/NavigatorContainer';
import styles from './src/styles/AppStyles';
import { colors } from './src/styles';
import { appOperations } from './src/modules/app';

class App extends Component {
  componentDidMount() {
    store.dispatch(appOperations.loadAssets());
    NetInfo.addEventListener(
      'connectionChange',
      this.handleConnectionChange,
    );
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleConnectionChange,
    );
  }

  handleConnectionChange(connectionInfo) { // eslint-disable-line
    store.dispatch(appOperations.netInfoChanged(connectionInfo.type !== 'none'));
  }

  render() {
    return (
      <View style={styles.rootStyle}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.white}
        />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      </View>
    );
  }
}

AppRegistry.registerComponent('UBCourier', () => App);

export default App;
