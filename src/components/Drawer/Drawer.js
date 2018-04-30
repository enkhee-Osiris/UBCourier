import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Text } from '../../components';
import { dimensions, colors, fontSizes } from '../../styles';
import DrawerNavigatorItems from './components/DrawerNavigationItems';

const styles = StyleSheet.create({
  titleContainer: {
    height: Platform.OS === 'android' ? 66 : 86,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingLeft: dimensions.indent,
    paddingBottom: dimensions.indent,
  },
  header: {
    fontSize: fontSizes.xmedium,
    color: colors.black,
  },
});

const Drawer = props => (
  <View>
    <View style={styles.titleContainer}>
      <Text style={styles.header}>UB Courier</Text>
    </View>
    <DrawerNavigatorItems {...props} />
  </View>
);

export default Drawer;
