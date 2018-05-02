import { StackNavigator } from 'react-navigation';
import { Login, Auth, Register } from '../../screens';
import screens from '../../constants/screens';

const LoginNavigator = StackNavigator({
  [screens.Auth]: {
    screen: Auth,
  },
  [screens.Login]: {
    screen: Login,
  },
}, {
  headerMode: 'none',
  title: 'Login',
});

export default LoginNavigator;
