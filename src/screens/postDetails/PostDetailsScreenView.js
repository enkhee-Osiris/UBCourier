import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { MapView } from 'expo';
import MapViewDirections from 'react-native-maps-directions';
import { NavigationButton, CustomMarker, TouchableItem } from '../../components';
import { GOOGLE_MAPS_API_KEY } from '../../config/local';
import { colors, fontSizes } from '../../styles';
import mapStyle from '../../styles/mapStyle';
import appStyles from '../../styles/AppStyles';
import s from './styles';

// TODO add user profile click
const PostDetails = ({
  isLoading,
  location,
  post,
  userDisplayName,
  userPhotoURL,
  userPhoneNumber,
  isMyPost,
  onPhoneNumberPress,
  onDeliver,
}) => {
  const getStatus = () => {
    if (post.isDelivered) {
      return { color: colors.blue, message: 'Delivered' };
    } else if (post.delivererId) {
      return { color: colors.green, message: 'Delivering' };
    }
    return { color: colors.red, message: 'Waiting' };
  };
  const status = getStatus();

  return (
    <View style={[s.root, appStyles.containerStyle]}>
      <Text style={s.postName}>{post.name}</Text>
      {/* TODO Add user prfile  */}
      <TouchableItem onPress={() => console.log('User profile')}>
        <View style={s.userContainer}>
          <Text style={s.userBy}>By</Text>
          <Image
            style={s.userAvatar}
            source={{ uri: userPhotoURL }}
          />
          <Text style={s.userDisplayName}>{userDisplayName}</Text>
        </View>
      </TouchableItem>
      <View style={s.detailsContainer}>
        <Image
          style={s.postImage}
          source={{ uri: post.imageURL }}
        />
        <View style={s.details}>
          <TouchableItem onPress={() => onPhoneNumberPress()}>
            <View style={s.row}>
              <Icon
                type="ionicon"
                underlayColor="transparent"
                name="ios-call-outline"
                containerStyle={s.icon}
                size={fontSizes.small}
                color={colors.primary}
              />
              <Text style={s.label}>PHONE:</Text>
              <Text style={s.detail}>{userPhoneNumber}</Text>
            </View>
          </TouchableItem>
          <View style={s.row}>
            <Icon
              type="ionicon"
              underlayColor="transparent"
              name="ios-speedometer-outline"
              containerStyle={s.icon}
              size={fontSizes.small}
              color={colors.primary}
            />
            <Text style={s.label}>WEIGHT:</Text>
            <Text style={s.detail}>{post.weight} gr</Text>
          </View>
          <View style={s.row}>
            <Icon
              type="ionicon"
              underlayColor="transparent"
              name="ios-cube-outline"
              containerStyle={s.icon}
              size={fontSizes.small}
              color={colors.primary}
            />
            <Text style={s.label}>VOLUME:</Text>
            <Text style={s.detail}>{post.volume} cm3</Text>
          </View>
          <View style={s.row}>
            <Icon
              type="ionicon"
              underlayColor="transparent"
              name="ios-cash-outline"
              containerStyle={s.icon}
              size={fontSizes.small}
              color={colors.primary}
            />
            <Text style={s.label}>PRICE:</Text>
            <Text style={s.detail}>{post.price} ₮</Text>
          </View>
          <View style={s.row}>
            <Icon
              type="ionicon"
              underlayColor="transparent"
              name="ios-bicycle"
              containerStyle={s.icon}
              size={fontSizes.small}
              color={colors.primary}
            />
            <Text style={s.label}>STATUS:</Text>
            <Text style={[s.detail, { color: status.color }]}>{status.message}</Text>
          </View>
        </View>
      </View>
      <View style={s.mapContainer}>
        <MapView
          style={s.map}
          customMapStyle={mapStyle}
          initialRegion={{
            ...post.currentLocation,
            latitudeDelta: 0.02,
            longitudeDelta: 0.013,
          }}
        >
          <MapView.Marker coordinate={post.currentLocation} />
          <MapView.Marker coordinate={post.targetLocation} />
          <CustomMarker coordinate={location} iconName="ios-bicycle" />
          <MapViewDirections
            origin={post.currentLocation}
            destination={post.targetLocation}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor={colors.green}
          />
        </MapView>
      </View>
      {
        !post.delivererId &&
        !isMyPost &&
        <Button
          loading={isLoading}
          loadingProps={{ size: 'small', color: colors.greyDarker }}
          title="Deliver"
          buttonStyle={s.deliverButton}
          textStyle={s.deliverButtonTitle}
          disabledStyle={s.deliverButtonDisabled}
          containerViewStyle={s.deliverButtonContainer}
          onPress={() => onDeliver()}
          disabled={isLoading}
        />
      }
    </View>
  );
};

PostDetails.propTypes = {
  isLoading: PropTypes.bool,
  location: PropTypes.object,
  post: PropTypes.object,
  userDisplayName: PropTypes.string,
  userPhotoURL: PropTypes.string,
  userPhoneNumber: PropTypes.string,
  isMyPost: PropTypes.bool,
  onPhoneNumberPress: PropTypes.func,
  onDeliver: PropTypes.func,
};

PostDetails.navigationOptions = ({ navigation }) => ({
  headerLeft: <NavigationButton
    iconName="ios-arrow-round-back"
    onPress={() => navigation.goBack()}
  />,
  headerTitle: 'Post Details',
  // TODO add delete button
});

export default PostDetails;
