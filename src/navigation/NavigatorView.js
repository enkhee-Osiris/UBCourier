import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { addNavigationHelpers } from 'react-navigation';
import { Loading } from '../components';
import { colors } from '../styles';
import Navigator from './Navigator';
import { NoInternet } from '../screens';

const addListener = createReduxBoundAddListener('root');

const NavigatorView = ({
  dispatch,
  navigator,
  isReady,
  isNetConnected,
}) => {
  if (isNetConnected && isReady) {
    return (
      <Navigator navigation={addNavigationHelpers({ dispatch, state: navigator, addListener })} />);
  } else if (!isReady) {
    return (
      <Loading
        containerStyle={StyleSheet.absoluteFill}
        size={60}
        thickness={5}
        color={colors.green}
      />);
  }

  return <NoInternet />;
};

NavigatorView.propTypes = {
  dispatch: PropTypes.func,
  navigator: PropTypes.object,
  isReady: PropTypes.bool,
  isNetConnected: PropTypes.bool,
};

export default NavigatorView;
