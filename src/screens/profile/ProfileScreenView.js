import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { NavigationButton } from '../../components';
import s from './styles';

const Profile = ({
  userDisplayName,
  userPhotoURL,
  userPosts,
  isModalVisible,
  onPostPress,
}) => {
  return (
    <View style={s.root}>
      <View style={s.userDetailContainer}>
        <Text>{userDisplayName}</Text>
      </View>
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
  userDisplayName: PropTypes.string,
  userPhotoURL: PropTypes.string,
  userPosts: PropTypes.array,
  isModalVisible: PropTypes.bool,
  onPostPress: PropTypes.func,
};

export default Profile;
