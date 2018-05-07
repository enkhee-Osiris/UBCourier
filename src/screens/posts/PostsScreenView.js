import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { NavigationButton, Loading } from '../../components';
import screens from '../../constants/screens';
import { colors } from '../../styles';
import s from './styles';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const Posts = ({
  posts,
  isLoading,
  onPress,
}) => (
  isLoading ? (
    <Loading
      containerStyle={s.loading}
      size={60}
      thickness={5}
      color={colors.green}
    />
  ) : (
    <View style={s.root}>
      <Text>Posts</Text>
    </View>
  )
);

Posts.propTypes = {
  posts: PropTypes.object,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
};

Posts.navigationOptions = ({ navigation }) => ({
  headerRight: <NavigationButton
    iconName="ios-add-outline"
    onPress={onNavigate(navigation, screens.PostEditor, {})}
  />,
});

export default Posts;
