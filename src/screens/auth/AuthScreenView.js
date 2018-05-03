import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { Logo, TouchableItem } from '../../components';
import appStyles from '../../styles/AppStyles';
import s from './styles';

const Auth = ({
  error,
  isLoading,
  onLogInWithFacebook,
  onRegisterPress,
  onSignInPress,
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
        <TouchableItem onPress={() => onSignInPress()} >
          <Text style={s.navigator}>SIGN IN</Text>
        </TouchableItem>
        <TouchableItem onPress={() => onRegisterPress()} >
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
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  onLogInWithFacebook: PropTypes.func,
  onRegisterPress: PropTypes.func,
  onSignInPress: PropTypes.func,
};

export default Auth;
