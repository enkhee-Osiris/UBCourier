import React from 'react';
import { NavIcon, PropsProxyHOC } from '../components';
import styles from '../styles/AppStyles';

const navOptions = ({ title, icon }) => ({
  navigationOptions: {
    title,
    headerTitle: title,
    drawerIcon: PropsProxyHOC(NavIcon, { name: icon }),
    headerStyle: styles.headerStyle,
    headerBackTitle: null,
  },
});

export default navOptions;
