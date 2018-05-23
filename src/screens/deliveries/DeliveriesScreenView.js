import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { PostItem } from './components';
import appStyles from '../../styles/AppStyles';
import s from './styles';

const Deliveries = ({
  navigation,
  deliveries,
  onPress,
}) => {
  const _keyExtractor = item => item.id;

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
    />
  );

  return (
    <View style={[s.root, appStyles.containerStyle]}>
      <FlatList
        data={deliveries}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={() => (<View style={s.separator} />)}
        ListEmptyComponent={<Text style={s.emptyText}>You don&apos;t have any delivery</Text>}
      />
    </View>
  );
};

Deliveries.navigationOptions = {
  headerTitle: 'My deliveries',
};

Deliveries.propTypes = {
  navigation: PropTypes.object,
  deliveries: PropTypes.array,
  onPress: PropTypes.func,
};

export default Deliveries;
