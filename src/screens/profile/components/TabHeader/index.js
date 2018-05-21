import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../../../styles';
import s from './styles';

const TabHeader = ({
  navigationState,
  position,
}) => {
  const inputRange = navigationState.routes.map((x, i) => i);

  return (
    <View style={s.tabBar}>
      {navigationState.routes.map((route, i) => {
        const color = position.interpolate({
          inputRange,
          outputRange:
            inputRange.map(inputIndex => (inputIndex === i ? colors.green : colors.grey)),
        });
        return (
          <TouchableOpacity
            style={s.tabItem}
          >
            <Animated.Text
              style={[s.text, { color }]}
            >
              {route.title}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

TabHeader.propTypes = {
  navigationState: PropTypes.object,
  position: PropTypes.object,
};

export default TabHeader;
