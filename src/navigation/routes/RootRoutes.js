import screens from '../../constants/screens';
import {
  HomeNavigator,
  ScreenNavigator,
  SettingsNavigator,
} from '../navigators';

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
};

export default Routes;
