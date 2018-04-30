import screens from '../constants/screens';
import {
  HomeNavigator,
  ScreenNavigator,
  SettingsNavigator,
  LoginNavigator,
} from './navigators';

const Routes = {
  [screens.HomeRoot]: {
    screen: HomeNavigator,
  },
  [screens.ScreenRoot]: {
    screen: ScreenNavigator,
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
  },
  [screens.LoginRoot]: {
    screen: LoginNavigator,
  },
};

export default Routes;
