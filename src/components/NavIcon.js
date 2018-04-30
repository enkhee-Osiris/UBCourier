import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

const NavIcon = ({ tintColor, size = 21, ...props }) => (
  <Icon
    type="ionicon"
    underlayColor="transparent"
    color={tintColor}
    size={size}
    {...props}
  />
);

NavIcon.propTypes = {
  tintColor: PropTypes.string,
};

export default NavIcon;
