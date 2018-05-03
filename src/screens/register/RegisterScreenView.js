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
  password,
  emailError,
  passwordError,
  error,
  onEmailChange,
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
          onSubmitEditing={() => onRegister(email, password)}
        />
        <Button
          loading={isLoading}
          loadingProps={{ size: 'small', color: colors.greyDarker }}
          title="Register"
          buttonStyle={s.registerButton}
          containerViewStyle={s.registerButtonContainer}
          color={colors.greyDarker}
          fontFamily="Montserrat-Bold"
          fontSize={fontSizes.small}
          fontWeight={fontWeights.bold}
          onPress={() => onRegister(email, password)}
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
  password: PropTypes.string,
  error: PropTypes.object,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  onEmailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
  onSignInPress: PropTypes.func,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
  onRegister: PropTypes.func,
};

export default Register;
