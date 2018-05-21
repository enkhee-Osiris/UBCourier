import { StyleSheet } from 'react-native';
import {
  colors,
  fontStyle,
  fontSizes,
} from '../../../../styles';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  text: fontStyle(),
});

export default styles;
