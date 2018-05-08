import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { NavigationButton } from '../../components';
import screens from '../../constants/screens';
import s from './styles';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const Posts = ({
  posts,
  onPress,
}) => (
  <View style={s.root}>
    <Text>Posts</Text>
  </View>
);

Posts.propTypes = {
  posts: PropTypes.object,
  onPress: PropTypes.func,
};

Posts.navigationOptions = ({ navigation }) => ({
  headerRight: <NavigationButton
    iconName="ios-add-outline"
    onPress={onNavigate(navigation, screens.PostDetails, {})}
  />,
});

export default Posts;
