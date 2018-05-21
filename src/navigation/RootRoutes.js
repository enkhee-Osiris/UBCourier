import screens from '../constants/screens';
import {
  HomeNavigator,
  PostNavigator,
  ProfileNavigator,
  SettingsNavigator,
} from './navigators';

const Routes = {
  [screens.HomeRoot]: {
    screen: HomeNavigator,
  },
  [screens.PostRoot]: {
    screen: PostNavigator,
  },
  [screens.ProfileRoot]: {
    screen: ProfileNavigator,
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
