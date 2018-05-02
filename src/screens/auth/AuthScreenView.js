import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Alert } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Logo, TouchableItem } from '../../components';
import screens from '../../constants/screens';
import appStyles from '../../styles/AppStyles';
import s from './styles';

const Auth = ({
  navigation,
  error,
  isLoading,
  onLogInWithFacebook,
}) => (
  <View style={[s.root, appStyles.containerStyle]}>
    <Logo containerStyle={s.logoContainer} style={s.logo} />
    <View style={s.container}>
      <View>
        <SocialIcon
          style={s.button}
          fontStyle={s.buttonFont}
          button
          loading={isLoading}
          disabled={isLoading}
          title="Join With Facebook"
          type="facebook"
          onPress={() => onLogInWithFacebook()}
        />
        <SocialIcon
          style={s.button}
          fontStyle={s.buttonFont}
          button
          loading={isLoading}
          disabled={isLoading}
          title="Join With Google+"
          type="google-plus-official"
        />
        {
          !!error &&
          <Text style={s.error}>
            {error.message}
          </Text>
        }
      </View>
      <View style={s.navigatorsContainer}>
        <TouchableItem onPress={() => navigation.navigate(screens.Login)} >
          <Text style={s.navigator}>SIGN IN</Text>
        </TouchableItem>
        <TouchableItem onPress={() => Alert.alert('Register', 'clicked!')} >
          <Text style={s.navigator}>REGISTER</Text>
        </TouchableItem>
      </View>
    </View>
  </View>
);

Auth.navigationOptions = {
  title: 'Auth',
};

Auth.propTypes = {
  navigation: PropTypes.object,
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  onLogInWithFacebook: PropTypes.func,
};

export default Auth;
