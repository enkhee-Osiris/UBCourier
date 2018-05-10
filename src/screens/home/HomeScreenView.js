import React from 'react';
import { MapView } from 'expo';
import PropTypes from 'prop-types';
import s from './styles';
import mapStyle from '../../styles/mapStyle';

const Home = ({ location }) => (
  <MapView
    style={s.root}
    initialRegion={{
      ...location,
      latitudeDelta: 0.02,
      longitudeDelta: 0.013,
    }}
    customMapStyle={mapStyle}
  />
);

Home.propTypes = {
  location: PropTypes.object,
};

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
