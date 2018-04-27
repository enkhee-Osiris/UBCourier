import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
/* import { Logo } from '../../components'; */
import { dimensions, colors } from '../../styles';
import DrawerNavigatorItems from './components/DrawerNavigationItems';

const styles = StyleSheet.create({
  titleContainer: {
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
    <View style={styles.titleContainer}>
      <Text>Osiris</Text>
    </View>
    <DrawerNavigatorItems {...props} />
  </View>
);

export default Drawer;
