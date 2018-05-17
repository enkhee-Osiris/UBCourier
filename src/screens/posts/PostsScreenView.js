import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { NavigationButton } from '../../components';
import { PostItem } from './components';
import screens from '../../constants/screens';
import appStyles from '../../styles/AppStyles';
import { colors } from '../../styles';
import s from './styles';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const Posts = ({
  navigation,
  posts,
  onPress,
}) => {
  const _keyExtractor = item => item.id;

  const getStatus = ({ isDelivered, delivererId }) => {
    if (isDelivered) {
      return { color: colors.blue, message: 'Delivered' };
    } else if (delivererId) {
      return { color: colors.green, message: 'Delivering' };
    }
    return { color: colors.red, message: 'Waiting' };
  };

  /* eslint-disable react/prop-types */
  const _renderItem = ({ item }) => (
    <PostItem
      navigation={navigation}
      userId={item.userId}
      name={item.name}
      weight={item.weight}
      volume={item.volume}
      price={item.price}
      image={item.imageURL}
      onPress={() => onPress(item)}
      status={getStatus(item)}
    />
  );

  return (
    <View style={[s.root, appStyles.containerStyle]}>
      <FlatList
        data={posts}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={() => (<View style={s.separator} />)}
        ListEmptyComponent={<Text style={s.emptyText}>You don&apos;t have any post</Text>}
      />
    </View>
  );
};

Posts.navigationOptions = ({ navigation }) => ({
  headerRight: <NavigationButton
    iconName="ios-add-outline"
    onPress={onNavigate(navigation, screens.PostEditor)}
  />,
});

Posts.propTypes = {
  navigation: PropTypes.object,
  posts: PropTypes.array,
  onPress: PropTypes.func,
};

export default Posts;
