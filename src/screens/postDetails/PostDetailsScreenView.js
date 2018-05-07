import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { NavigationButton } from '../../components';
import { colors } from '../../styles';
import s from './styles';

const PostDetails = ({
  post,
}) => (
  <View style={s.root}>
    <Text>Post details</Text>
  </View>
);

PostDetails.propTypes = {
  post: PropTypes.object,
};

PostDetails.navigationOptions = ({ navigation }) => ({
  headerLeft: <NavigationButton
    iconName="ios-arrow-round-back"
    onPress={() => navigation.goBack()}
  />,
  headerTitle: 'Post Details',
  // TODO add delete button
});

export default PostDetails;
