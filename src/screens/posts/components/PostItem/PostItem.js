import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { TouchableItem, Separator } from '../../../../components';
import { colors } from '../../../../styles';
import s from './styles';

const PostItem = ({
  userId,
  userDisplayName,
  userPhotoURL,
  name,
  weight,
  volume,
  price,
  // image,
  status,
  onPress,
  onUserPress,
}) => (
  <TouchableItem
    onPress={onPress}
  >
    <View style={s.postContainer}>
      <TouchableItem onPress={() => onUserPress(userId)}>
        <View style={s.userContainer}>
          <Image
            style={s.userAvatar}
            source={{ uri: userPhotoURL }}
          />
          <Text style={s.userDisplayName}>{userDisplayName}</Text>
        </View>
      </TouchableItem>
      <Separator style={s.separator} marginVertical={9} />
      <View style={s.row}>
        <Text style={s.label}>NAME:</Text>
        <Text style={s.detail}>{name}</Text>
      </View>
      <View style={s.row}>
        <Text style={s.label}>WEIGHT:</Text>
        <Text style={s.detail}>{weight} gr</Text>
      </View>
      <View style={s.row}>
        <Text style={s.label}>VOLUME:</Text>
        <Text style={s.detail}>{volume} cm3</Text>
      </View>
      <View style={s.row}>
        <Text style={s.label}>PRICE:</Text>
        <Text style={s.detail}>{price}</Text>
      </View>
      <View style={s.row}>
        <Text style={s.label}>STATUS:</Text>
        <Text style={[s.detail, { color: status.color }]}>
          {status.message}
        </Text>
      </View>
    </View>
  </TouchableItem>
);

PostItem.propTypes = {
  userId: PropTypes.string,
  userDisplayName: PropTypes.string,
  userPhotoURL: PropTypes.string,
  name: PropTypes.string,
  weight: PropTypes.string,
  volume: PropTypes.string,
  price: PropTypes.string,
  // image: PropTypes.string,
  status: PropTypes.object,
  onPress: PropTypes.func,
  onUserPress: PropTypes.func,
};

export default PostItem;
