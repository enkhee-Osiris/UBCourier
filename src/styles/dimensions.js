import { Platform, Dimensions } from 'react-native';
import { moderateScale, verticalScale } from './scalingUtils';

const { width } = Dimensions.get('window');

export const indent = moderateScale(16);
export const halfIndent = moderateScale(indent / 2);
export const doubleIndent = moderateScale(indent * 2);

export const verticalIndent = verticalScale(indent);

export const iconSize = indent * 1.5;
export const iconMargin = Platform.OS === 'android' ? 16 : 10;


export const length = (width / 3) - (indent + (halfIndent / 1.5));


export const appBarHeight = Platform.OS === 'ios' ? 44 : 56;
export const statusBarHeight = Platform.OS === 'ios' ? 36 : 0;
export const headerHeight = appBarHeight + statusBarHeight;
