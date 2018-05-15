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

const Register = ({
  navigation,
  email,
  phoneNumber,
  displayName,
  password,
  emailError,
  phoneNumberError,
  displayNameError,
  passwordError,
  error,
  onEmailChange,
  onPhoneNumberChange,
  onDisplayNameChange,
  onPasswordChange,
  onSignInPress,
  isLoading,
  isValid,
  onRegister,
}) => (
  <View style={[s.root, appStyles.containerStyle]}>
    <View style={s.headerContainer}>
      <NavigationButton
        backOnSuccess
        tintColor={colors.grey}
        containerStyle={s.backButton}
        navigation={navigation}
        iconName="ios-arrow-round-back"
        size={50}
      />
      <Text style={s.registerText}>Register</Text>
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
          onSubmitEditing={() => this.phoneTextInput.focus()}
        />
        <Input
          placeholder="(+976) 88******"
          keyboardType="phone-pad"
          value={phoneNumber}
          icon={{ name: 'ios-call-outline' }}
          onChangeText={onPhoneNumberChange}
          secondContainerStyle={s.inputContainer}
          containerStyleFocus={s.inputContainerFocus}
          isNotValidStyle={null}
          style={s.inputStyle}
          error={phoneNumberError}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.nameTextInput.focus()}
          inputRef={(input) => { this.phoneTextInput = input; }}
        />
        <Input
          placeholder="Display Name"
          value={displayName}
          icon={{ name: 'ios-person-outline' }}
          onChangeText={onDisplayNameChange}
          secondContainerStyle={s.inputContainer}
          containerStyleFocus={s.inputContainerFocus}
          isNotValidStyle={null}
          style={s.inputStyle}
          error={displayNameError}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.passTextInput.focus()}
          inputRef={(input) => { this.nameTextInput = input; }}
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
          onSubmitEditing={() => onRegister()}
        />
        <Button
          loading={isLoading}
          loadingProps={{ size: 'small', color: colors.greyDarker }}
          title="Register"
          buttonStyle={s.registerButton}
          textStyle={s.registerButtonTitle}
          disabledStyle={s.registerButtonDisabled}
          containerViewStyle={s.registerButtonContainer}
          onPress={() => onRegister()}
          disabled={!isValid || isLoading}
        />
        {
          !!error &&
          <Text style={s.error}>
            {error.message}
          </Text>
        }
      </View>
      <View style={s.signInContainer}>
        <Text style={s.signInText}>
          Already have an account.
        </Text>
        <TouchableItem onPress={() => onSignInPress()} >
          <Text style={s.navigator}> Sign In Here</Text>
        </TouchableItem>
      </View>
    </View>
  </View>
);

Register.navigationOptions = {
  title: 'Register',
};

Register.propTypes = {
  navigation: PropTypes.object,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  displayName: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.object,
  emailError: PropTypes.string,
  phoneNumberError: PropTypes.string,
  displayNameError: PropTypes.string,
  passwordError: PropTypes.string,
  onEmailChange: PropTypes.func,
  onPhoneNumberChange: PropTypes.func,
  onDisplayNameChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onSignInPress: PropTypes.func,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
  onRegister: PropTypes.func,
};

export default Register;
