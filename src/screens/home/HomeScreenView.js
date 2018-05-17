import React from 'react';
import { MapView } from 'expo';
import PropTypes from 'prop-types';
import { NavigationButton } from '../../components';
import screens from '../../constants/screens';
import s from './styles';
import mapStyle from '../../styles/mapStyle';

const Home = ({ location }) => (
  <MapView
    style={s.root}
    customMapStyle={mapStyle}
    initialRegion={{
      ...location,
      latitudeDelta: 0.02,
      longitudeDelta: 0.013,
    }}
  />
);

Home.propTypes = {
  location: PropTypes.object,
};

Home.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerRight: <NavigationButton
    iconName="ios-add-outline"
    onPress={() => navigation.navigate(screens.PostEditor)}
  />,
});

export default Home;
