import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableItem } from '../../../../components';
import { colors, fontSizes } from '../../../../styles';
import s from './styles';

const PostItem = ({
  name,
  weight,
  volume,
  price,
  imageURL,
  onPress,
}) => (
  <TouchableItem
    onPress={onPress}
  >
    <View style={s.container}>
      <Image
        style={s.image}
        source={{ uri: imageURL }}
      />
      <View style={s.details}>
        <View style={s.detail}>
          <Text style={s.name}>{name}</Text>
        </View>
        <View style={s.detail}>
          <Icon
            type="ionicon"
            underlayColor="transparent"
            name="ios-speedometer-outline"
            containerStyle={s.icon}
            size={fontSizes.small}
            color={colors.primary}
          />
          <Text style={s.detailLabel}>WEIGHT:</Text>
          <Text style={s.detailText}>{weight} gr</Text>
        </View>
        <View style={s.detail}>
          <Icon
            type="ionicon"
            underlayColor="transparent"
            name="ios-cube-outline"
            containerStyle={s.icon}
            size={fontSizes.small}
            color={colors.primary}
          />
          <Text style={s.detailLabel}>VOLUME:</Text>
          <Text style={s.detailText}>{volume} cm3</Text>
        </View>
        <View style={s.detail}>
          <Icon
            type="ionicon"
            underlayColor="transparent"
            name="ios-cash-outline"
            containerStyle={s.icon}
            size={fontSizes.small}
            color={colors.primary}
          />
          <Text style={s.detailLabel}>PRICE:</Text>
          <Text style={s.detailText}>{price} ₮</Text>
        </View>
      </View>
    </View>
  </TouchableItem>
);

PostItem.propTypes = {
  name: PropTypes.string,
  weight: PropTypes.string,
  volume: PropTypes.string,
  price: PropTypes.string,
  imageURL: PropTypes.string,
  onPress: PropTypes.func,
};

export default PostItem;
