import React from 'react';
import PropTypes from 'prop-types';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import {
  View,
  FlatList,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import { NavigationButton, Separator } from '../../components';
import { TabHeader, PostItem, ReviewItem } from './components';
import appStyles from '../../styles/AppStyles';
import s from './styles';

const Profile = ({
  navigation,
  navigationState,
  userDisplayName,
  userPhotoURL,
  userPosts,
  userReviews,
  userTotalDeliveries,
  userAvaragePoint,
  isModalVisible,
  onPostPress,
  updateNavigationIndex,
}) => {
  const _keyExtractor = item => item.id;

  /* eslint-disable react/prop-types */
  const _renderPostItem = ({ item }) => (
    <PostItem
      name={item.name}
      weight={item.weight}
      volume={item.volume}
      price={item.price}
      imageURL={item.imageURL}
      onPress={() => onPostPress(item)}
    />
  );

  const _renderReviewItem = ({ item }) => (
    <ReviewItem
      navigation={navigation}
      point={item.point}
      reviewerId={item.reviewerId}
      text={item.text}
    />
  );

  const PostsView = () => (
    <ScrollView style={s.container}>
      <FlatList
        data={userPosts}
        renderItem={_renderPostItem}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={<Text style={s.emptyText}>User don&apos;t have any post</Text>}
      />
    </ScrollView>
  );

  const ReviewsView = () => (
    <ScrollView style={s.container}>
      <FlatList
        data={userReviews}
        renderItem={_renderReviewItem}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={<Text style={s.emptyText}>User don&apos;t have any review</Text>}
      />
    </ScrollView>
  );

  const _renderScene = SceneMap({
    posts: PostsView,
    reviews: ReviewsView,
  });

  return (
    <View style={[s.root, appStyles.containerStyle]}>
      <View style={s.userDetailContainer}>
        <Image
          style={s.userPhoto}
          source={{ uri: userPhotoURL }}
        />
        <Text style={s.userDisplayName}>{userDisplayName}</Text>
        <View style={s.userDetails}>
          <Text style={s.userDetail}>{userAvaragePoint} Point</Text>
          <Text style={s.userDetail}>{userTotalDeliveries} Deliveries</Text>
        </View>
      </View>
      <TabViewAnimated
        style={s.tabViewContainer}
        navigationState={navigationState}
        renderScene={_renderScene}
        renderHeader={TabHeader}
        onIndexChange={updateNavigationIndex}
      />
    </View>
  );
};

Profile.navigationOptions = ({ navigation }) => ({
  headerLeft: <NavigationButton
    iconName="ios-arrow-round-back"
    onPress={() => navigation.goBack()}
  />,
  headerTitle: 'User Profile',
  // TODO add edit button
});

Profile.propTypes = {
  navigation: PropTypes.object,
  navigationState: PropTypes.object,
  userDisplayName: PropTypes.string,
  userPhotoURL: PropTypes.string,
  userPosts: PropTypes.array,
  userReviews: PropTypes.array,
  userTotalDeliveries: PropTypes.number,
  userAvaragePoint: PropTypes.number,
  isModalVisible: PropTypes.bool,
  onPostPress: PropTypes.func,
  updateNavigationIndex: PropTypes.func,
};

export default Profile;
