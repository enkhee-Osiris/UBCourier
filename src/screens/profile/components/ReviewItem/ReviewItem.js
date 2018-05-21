import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import { colors } from '../../../../styles';
import s from './styles';

const ReviewItem = ({
  userDisplayName,
  userPhotoURL,
  point,
  text,
}) => (
  <View style={s.container}>
    <View style={s.userContainer}>
      <Image
        style={s.image}
        source={{ uri: userPhotoURL }}
      />
      <Text style={s.userDisplayName}>{userDisplayName}</Text>
    </View>
    <View style={s.reviewContainer}>
      <StarRating
        disabled
        containerStyle={{ justifyContent: 'flex-start' }} // eslint-disable-line
        starSize={24}
        emptyStar="ios-star-outline"
        fullStar="ios-star"
        halfStar="ios-star-half"
        iconSet="Ionicons"
        maxStars={5}
        rating={point}
        fullStarColor={colors.grey}
      />
      <Text style={s.reviewText}>{text}</Text>
    </View>
  </View>
);

ReviewItem.propTypes = {
  userDisplayName: PropTypes.string,
  userPhotoURL: PropTypes.string,
  point: PropTypes.number,
  text: PropTypes.string,
};

export default ReviewItem;
