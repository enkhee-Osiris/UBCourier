import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

const NavIcon = ({ tintColor, ...props }) => (
  <Icon
    type="ionicon"
    underlayColor="transparent"
    color={tintColor}
    {...props}
  />
);

NavIcon.propTypes = {
  tintColor: PropTypes.string,
};

export default NavIcon;
