import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import StylePropType from 'react-style-proptype';
import { Text, TouchableItem } from '../../../../components';
import { colors } from '../../../../styles';
import s from './styles';

const DrawerNavigatorItems = ({
  navigation,
  activeBackgroundColor,
  inactiveBackgroundColor,
  getLabel,
  renderIcon,
  style,
}) => (
  <View style={style}>
    {navigation.state.routes.map((route, index) => {
      const focused = navigation.state.index === index;
      const color = focused ? colors.green : colors.black;
      const backgroundColor = focused ? activeBackgroundColor : inactiveBackgroundColor;
      const scene = {
        focused,
        tintColor: color,
        route,
      };
      const icon = renderIcon(scene);
      const label = getLabel(scene);
      return (
        <TouchableItem
          key={route.key}
          onPress={() => {
            navigation.navigate('DrawerClose');
            navigation.navigate(route.routeName);
          }}
          delayPressIn={0}
        >
          <View style={[s.item, focused ? s.activeIcon : null, { backgroundColor }]}>
            {icon ?
              <View style={[s.icon, focused ? null : s.inactiveIcon]}>
                {icon}
              </View>
            :
              null
            }
            {typeof label === 'string' ? (
              <Text style={[s.label, focused ? s.activeLabel : null]}>
                {label}
              </Text>
            ) : (
                label
            )}
          </View>
        </TouchableItem>
      );
    })}
  </View>
);

DrawerNavigatorItems.defaultProps = {
  activeBackgroundColor: 'rgba(0, 0, 0, .04)',
  inactiveBackgroundColor: 'transparent',
};

DrawerNavigatorItems.propTypes = {
  navigation: PropTypes.object,
  activeBackgroundColor: PropTypes.string,
  inactiveBackgroundColor: PropTypes.string,
  getLabel: PropTypes.func,
  renderIcon: PropTypes.func,
  style: StylePropType,
};

export default DrawerNavigatorItems;
