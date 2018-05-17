import React from 'react';
import PropTypes from 'prop-types';
import { MapView } from 'expo';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, fontSizes } from '../../styles';
import s from './styles';

const CustomMarker = ({
  coordinate,
  iconName,
  iconColor = colors.white,
  iconSize = fontSizes.xmedium,
}) => (
  <MapView.Marker coordinate={coordinate}>
    <View style={s.container}>
      <View style={s.bubble}>
        <Icon
          type="ionicon"
          underlayColor="transparent"
          name={iconName}
          containerStyle={s.icon}
          size={iconSize}
          color={iconColor}
        />
      </View>
      <View style={s.arrowBorder} />
      <View style={s.arrow} />
    </View>
  </MapView.Marker>
);

CustomMarker.propTypes = {
  coordinate: PropTypes.object,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
};

export default CustomMarker;
