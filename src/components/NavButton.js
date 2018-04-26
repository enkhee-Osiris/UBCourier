import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { NavIcon } from '../components';
import styles from '../styles/AppStyles';

const NavButton = (props) => {
  const {
    iconName,
    isVisible = true,
    backOnSuccess,
    navigation,
    action,
  } = props;

  const onPress = () => {
    action();
    if (navigation && backOnSuccess) {
      navigation.dispatch(NavigationActions.back());
    }
  };

  return isVisible ? (
    <NavIcon
      iconStyle={styles.headerIconStyle}
      name={iconName}
      onPress={onPress}
    />
  ) : null;
};

NavButton.propTypes = {
  navigation: PropTypes.object,
  action: PropTypes.func,
  backOnSuccess: PropTypes.bool,
  isVisible: PropTypes.bool,
  iconName: PropTypes.string,
};

export default NavButton;
