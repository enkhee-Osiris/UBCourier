import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import {
  dimensions,
  colors,
  fontSizes,
  fontWeights,
  fontStyle,
} from '../../styles';
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
  header: fontStyle({
    fontSize: fontSizes.big,
    fontWeight: fontWeights.heavy,
    color: colors.black,
  }),
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
