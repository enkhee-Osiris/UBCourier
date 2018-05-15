import React from 'react';
import { MapView } from 'expo';
import { ScrollView, Image, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import { NavigationButton, Input, TouchableItem } from '../../components';
import { colors } from '../../styles';
import appStyles from '../../styles/AppStyles';
import s from './styles';

const PostEditor = ({
  name,
  weight,
  volume,
  price,
  image,
  targetLocation,
  delivererId,
  onImagePick,
  onNameChange,
  onWeightChange,
  onVolumeChange,
  onPriceChange,
  setLocation,
  isValid,
  isLoading,
  onSubmit,
}) => (
  <ScrollView
    style={[s.root, appStyles.containerStyle]}
    keyboardShouldPersistTaps="never"
  >
    <TouchableItem
      style={s.imagePickContainer}
      onPress={() => onImagePick()}
    >
      <Image
        style={s.imagePick}
        source={image}
      />
    </TouchableItem>
    <Input
      label="NAME"
      labelStyle={s.label}
      value={name}
      iconRight={{ name: 'ios-mail-outline' }}
      onChangeText={onNameChange}
      secondContainerStyle={s.inputContainer}
      containerStyleFocus={s.inputContainerFocus}
      isNotValidStyle={null}
      style={s.inputStyle}
      returnKeyType="next"
      blurOnSubmit={false}
      onSubmitEditing={() => this.weightTextInput.focus()}
    />
    <Input
      label="WEIGHT (gr)"
      labelStyle={s.label}
      keyboardType="numeric"
      value={weight}
      iconRight={{ name: 'ios-speedometer-outline' }}
      onChangeText={onWeightChange}
      secondContainerStyle={s.inputContainer}
      containerStyleFocus={s.inputContainerFocus}
      isNotValidStyle={null}
      style={s.inputStyle}
      returnKeyType="next"
      blurOnSubmit={false}
      onSubmitEditing={() => this.volumeTextInput.focus()}
      inputRef={(input) => { this.weightTextInput = input; }}
    />
    <Input
      label="VOLUME (cm3)"
      labelStyle={s.label}
      keyboardType="numeric"
      value={volume}
      iconRight={{ name: 'ios-cube-outline' }}
      onChangeText={onVolumeChange}
      secondContainerStyle={s.inputContainer}
      containerStyleFocus={s.inputContainerFocus}
      isNotValidStyle={null}
      style={s.inputStyle}
      returnKeyType="next"
      blurOnSubmit={false}
      onSubmitEditing={() => this.priceTextInput.focus()}
      inputRef={(input) => { this.volumeTextInput = input; }}
    />
    <Input
      label="PRICE (₮)"
      labelStyle={s.label}
      keyboardType="numeric"
      value={price}
      iconRight={{ name: 'ios-cash-outline' }}
      onChangeText={onPriceChange}
      secondContainerStyle={s.inputContainer}
      containerStyleFocus={s.inputContainerFocus}
      isNotValidStyle={null}
      style={s.inputStyle}
      blurOnSubmit={false}
      inputRef={(input) => { this.priceTextInput = input; }}
    />
    <Text style={s.label}>TARGET LOCATION</Text>
    <View style={s.mapContainer}>
      <MapView
        style={s.map}
        initialRegion={{
          ...targetLocation,
          latitudeDelta: 0.02,
          longitudeDelta: 0.013,
        }}
      >
        <MapView.Marker
          coordinate={targetLocation}
          onDragEnd={event => setLocation(event.nativeEvent.coordinate)}
          draggable
        />
      </MapView>
    </View>
    <Button
      loading={isLoading}
      loadingProps={{ size: 'small', color: colors.greyDarker }}
      title="Save"
      buttonStyle={s.saveButton}
      textStyle={s.saveButtonTitle}
      disabledStyle={s.saveButtonDisabled}
      containerViewStyle={s.saveButtonContainer}
      onPress={() => onSubmit()}
      disabled={!isValid || isLoading}
    />
  </ScrollView>
);

PostEditor.propTypes = {
  name: PropTypes.string,
  weight: PropTypes.string,
  volume: PropTypes.string,
  price: PropTypes.string,
  delivererId: PropTypes.string,
  onImagePick: PropTypes.func,
  onNameChange: PropTypes.func,
  onWeightChange: PropTypes.func,
  onVolumeChange: PropTypes.func,
  onPriceChange: PropTypes.func,
  isValid: PropTypes.bool,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  targetLocation: PropTypes.object,
  setLocation: PropTypes.func,
};

PostEditor.navigationOptions = ({ navigation }) => ({
  headerLeft: <NavigationButton
    iconName="ios-arrow-round-back"
    onPress={() => navigation.goBack()}
  />,
  headerRight: <NavigationButton
    iconName="ios-trash-outline"
    tintColor={colors.red}
    onPress={() => console.log('delete')}
  />,
  headerTitle: navigation.getParam('post') ? 'Edit post' : 'New post',
});

export default PostEditor;
