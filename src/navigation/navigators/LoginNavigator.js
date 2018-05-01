import { StackNavigator } from 'react-navigation';
import { Login } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../styles/navOptions';

const LoginNavigator = StackNavigator({
  [screens.Login]: {
    screen: Login,
  },
}, {
  ...navOptions({
    title: 'Login',
  }),
});

export default LoginNavigator;
