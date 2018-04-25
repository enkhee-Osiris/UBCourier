import { StackNavigator } from 'react-navigation';
import { Home } from '../../screens';
import screens from '../../constants/screens';
import styles from '../../styles/AppStyles';

const TrendsNavigator = StackNavigator({
  [screens.Home]: {
    screen: Home,
  },
}, {
  ...{
    title: 'Home',
    // icon: 'settings',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitle: null,
  },
});

export default TrendsNavigator;
