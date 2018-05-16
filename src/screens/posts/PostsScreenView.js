import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { NavigationButton } from '../../components';
import { PostItem } from './components';
import screens from '../../constants/screens';
import appStyles from '../../styles/AppStyles';
import s from './styles';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const Posts = ({
  posts,
  onPress,
}) => {
  const _keyExtractor = item => item.id;

  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <PostItem
      userId={item.userId}
      name={item.name}
      weight={item.weight}
      volume={item.volume}
      price={item.price}
      image={item.imageURL}
      onPress={() => onPress(item)}
      status={item.isDelivered && !!item.delivererId}
    />
  );

  return (
    <View style={[s.root, appStyles.containerStyle]}>
      <FlatList
        data={posts}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ListEmptyComponent={<Text style={s.emptyText}>You don&apos;t have any post</Text>}
      />
    </View>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
  onPress: PropTypes.func,
};

Posts.navigationOptions = ({ navigation }) => ({
  headerRight: <NavigationButton
    iconName="ios-add-outline"
    onPress={onNavigate(navigation, screens.PostEditor)}
  />,
});

export default Posts;
