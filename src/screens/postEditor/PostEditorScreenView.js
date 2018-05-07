import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { NavigationButton } from '../../components';
import { colors } from '../../styles';
import s from './styles';

const PostEditor = ({
  post,
  name,
  weight,
  onNameChange,
  onWeightChange,
  isValid,
  onSubmit,
}) => (
  <View style={s.root}>
    <Text>Post editor</Text>
  </View>
);

PostEditor.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  name: PropTypes.string,
  weight: PropTypes.string,
  onNameChange: PropTypes.func,
  onWeightChange: PropTypes.func,
  isValid: PropTypes.bool,
  onSubmit: PropTypes.func,
};

PostEditor.navigationOptions = ({ navigation }) => ({
  headerLeft: <NavigationButton
    iconName="ios-arrow-round-back"
    onPress={() => navigation.goBack()}
  />,
  headerTitle: navigation.getParam('post') ? 'Edit post' : 'New post',
  // TODO add delete button
});

export default PostEditor;
