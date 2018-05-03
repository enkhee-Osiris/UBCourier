import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Input, NavigationButton, TouchableItem } from '../../components';
import screens from '../../constants/screens';
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
        iconName="ios-arrow-round-back"
        size={50}
      />
      <Text style={s.signInText}>Sign In</Text>
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
        />
        <Button
          loading={isLoading}
          loadingProps={{ size: 'small', color: colors.greyDarker }}
          title="Sign In"
          buttonStyle={s.signInButton}
          containerViewStyle={s.signInButtonContainer}
          color={colors.greyDarker}
          fontFamily="Montserrat-Bold"
          fontSize={fontSizes.small}
          fontWeight={fontWeights.bold}
          onPress={() => (onLogIn(email, password))}
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
        <TouchableItem onPress={() => navigation.navigate(screens.Register)} >
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
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
  onLogIn: PropTypes.func,
};

export default Login;
