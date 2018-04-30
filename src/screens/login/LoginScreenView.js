import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Text,
  UIManager,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from '../../components';
import s from './styles';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

const Login = ({
  navigation,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  isLoading,
  isLoggedIn,
  isValid,
  onLogIn,
  onLogOut,
  onLogInWithFacebook,
}) => (
  <View style={s.container}>
    <KeyboardAvoidingView
      behavior="position"
      contentContainerStyle={s.formContainer}
    >
      <Text style={s.signInText}>Sign In</Text>
      <View style={{width: '80%', alignItems: 'center'}}>
        <Input
          isValid
          placeholder="Email"
          value={email}
          onChangeText={onEmailChange}
          secondContainerStyle={s.inputContainer}
          style={s.inputStyle}
        />
        <Input
          isValid
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={onPasswordChange}
          secondContainerStyle={s.inputContainer}
          style={s.inputStyle}
        />
      </View>
      <Button
        loading={isLoading}
        title="Log In"
        containerStyle={{ flex: -1 }}
        buttonStyle={s.logInButton}
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: [1, 0],
          end: [0.2, 0],
        }}
        onPress={onLogIn}
        disabled={isLoading && isValid}
      />
      <Button
        loading={isLoading}
        title="Log Out"
        containerStyle={{ flex: -1 }}
        buttonStyle={s.logInButton}
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: [1, 0],
          end: [0.2, 0],
        }}
        onPress={onLogOut}
        disabled={isLoading && isValid}
      />
    </KeyboardAvoidingView>
    <View style={s.signUpContainer}>
      <Text style={s.signUpAccountText}>
        If you don't have an account.
      </Text>
      <Button
        title="Sign Up"
        containerStyle={{ flex: -1 }}
        buttonStyle={{ backgroundColor: 'transparent' }}
        underlayColor="transparent"
        onPress={() => Alert.alert('🔥', 'You can login here')}
      />
    </View>
  </View>
);

Login.navigationOptions = {
  title: 'Login',
};

Login.propTypes = {
  navigation: PropTypes.object,
  email: PropTypes.string,
  password: PropTypes.string,
  onEmailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
  onLogIn: PropTypes.func,
  onLogInWithFacebook: PropTypes.func,
};

export default Login;
