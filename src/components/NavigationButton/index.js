import React from 'react';
import PropTypes from 'prop-types';
import StylePropType from 'react-style-proptype';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import TouchableItem from '../TouchableItem';
import NavIcon from '../NavIcon';
import { colors } from '../../styles';
import s from './styles';


const NavigationButton = (props) => {
  const {
    title,
    titleStyle,
    tintColor,
    iconName,
    onPress,
    containerStyle,
    navigation,
    backOnSuccess,
    isVisible = true,
    ...iconProps
  } = props;

  const onPressButton = () => {
    if (onPress) onPress();
    if (navigation && backOnSuccess) {
      navigation.dispatch(NavigationActions.back());
    }
  };

  return isVisible ? (
    <TouchableItem
      style={[s.container, containerStyle]}
      onPress={onPressButton}
      borderless
      useOpacity
    >
      <View>
        {iconName &&
        <NavIcon
          tintColor={tintColor || colors.greyDarker}
          name={iconName}
          {...iconProps}
        />
        }

        {title && <Text style={[s.title, titleStyle]}>{title}</Text>}

      </View>
    </TouchableItem>

  ) : null;
};

NavigationButton.propTypes = {
  navigation: PropTypes.object,
  isVisible: PropTypes.bool,
  backOnSuccess: PropTypes.bool,
  tintColor: PropTypes.string,
  name: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: StylePropType,
  title: PropTypes.string,
  iconName: PropTypes.string,
  titleStyle: StylePropType,
};

export default NavigationButton;
