import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
/* import { Loading } from '../components';*/
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { addNavigationHelpers } from "react-navigation";
import Navigator from './Navigator';
/* import colors from '..';*/

const addListener = createReduxBoundAddListener('root');

const NavigatorView = ({ dispatch, navigator, isReady }) => (
  isReady ? (
    <Navigator navigation={addNavigationHelpers({ dispatch, state: navigator, addListener })} />
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  )
);

NavigatorView.propTypes = {
  dispatch: PropTypes.func,
  navigator: PropTypes.object,
  isReady: PropTypes.bool,
};

export default NavigatorView;
