import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Input, NavigationButton, TouchableItem } from '../../components';
import appStyles from '../../styles/AppStyles';
import { colors, fontSizes, fontWeights } from '../../styles';
import s from './styles';

const Login = ({
  navigation,
  email,
  password,
  emailError,
  passwordError,
  error,
  onEmailChange,
  onPasswordChange,
  onRegisterPress,
  isLoading,
  isValid,
  onLogIn,
}) => (
  <View style={[s.root, appStyles.containerStyle]}>
    <View style={s.headerContainer}>
      <NavigationButton
        backOnSuccess
        containerStyle={s.backButton}
        navigation={navigation}
        tintColor={colors.grey}
        iconName="ios-arrow-round-back"
        size={50}
      />
      <Text style={s.signInText}>Sign In</Text>
    </View>
    <View style={s.container}>
      <View style={s.formContainer}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          icon={{ name: 'ios-mail-outline' }}
          onChangeText={onEmailChange}
          secondContainerStyle={s.inputContainer}
          containerStyleFocus={s.inputContainerFocus}
          isNotValidStyle={null}
          style={s.inputStyle}
          error={emailError}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.passTextInput.focus()}
        />
        <Input
          secureTextEntry
          placeholder="Password"
          value={password}
          icon={{ name: 'ios-lock-outline' }}
          onChangeText={onPasswordChange}
          secondContainerStyle={s.inputContainer}
          containerStyleFocus={s.inputContainerFocus}
          isNotValidStyle={null}
          style={s.inputStyle}
          error={passwordError}
          inputRef={(input) => { this.passTextInput = input; }}
          returnKeyType="done"
          onSubmitEditing={() => onLogIn()}
        />
        <Button
          loading={isLoading}
          loadingProps={{ size: 'small', color: colors.greyDarker }}
          title="Sign In"
          buttonStyle={s.signInButton}
          textStyle={s.signInButtonTitle}
          disabledStyle={s.signInButtonDisabled}
          containerViewStyle={s.signInButtonContainer}
          onPress={() => onLogIn()}
          disabled={!isValid || isLoading}
        />
        {
          !!error &&
          <Text style={s.error}>
            {error.message}
          </Text>
        }
      </View>
      <View style={s.signUpContainer}>
        <Text style={s.signUpText}>
          If you don&apos;t have an account.
        </Text>
        <TouchableItem onPress={() => onRegisterPress()} >
          <Text style={s.navigator}> Register Here</Text>
        </TouchableItem>
      </View>
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
  error: PropTypes.object,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  onEmailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onRegisterPress: PropTypes.func,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
  onLogIn: PropTypes.func,
};

export default Login;
