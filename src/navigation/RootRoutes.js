import screens from '../constants/screens';
import {
  HomeNavigator,
  PostNavigator,
  ScreenNavigator,
  SettingsNavigator,
} from './navigators';

const Routes = {
  [screens.HomeRoot]: {
    screen: HomeNavigator,
  },
  [screens.PostRoot]: {
    screen: PostNavigator,
  },
  [screens.ScreenRoot]: {
    screen: ScreenNavigator,
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
