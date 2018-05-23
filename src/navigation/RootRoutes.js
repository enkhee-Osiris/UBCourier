import screens from '../constants/screens';
import {
  HomeNavigator,
  PostNavigator,
  DeliveryNavigator,
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
  [screens.DeliveryRoot]: {
    screen: DeliveryNavigator,
  },
  [screens.ProfileRoot]: {
    screen: ProfileNavigator,
  },
  [screens.SettingsRoot]: {
    screen: SettingsNavigator,
  },
};

export default Routes;
