import { StyleSheet } from 'react-native';
import {
  colors,
  fontStyle,
  dimensions,
} from '../../styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: dimensions.indent,
  },
  emptyText: fontStyle({
    alignSelf: 'center',
    color: colors.primary,
  }),
  separator: {
    marginBottom: dimensions.indent,
  },
});

export default styles;
