import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
/* import { Logo } from '../../components';*/
import { dimensions } from '../../styles';
import colors from '../../styles/colors';
import DrawerNavigatorItems from './components/DrawerNavigationItems';

const styles = StyleSheet.create({
  titleContainerStyle: {
    height: Platform.OS === 'android' ? 66 : 86,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingLeft: dimensions.indent,
    paddingBottom: dimensions.indent,
  },
});

const Drawer = props => (
  <View>
    <View style={styles.titleContainerStyle}>
      <Text>Osiris</Text>
    </View>
    <DrawerNavigatorItems {...props} />
  </View>
);

export default Drawer;
