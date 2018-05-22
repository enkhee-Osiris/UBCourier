import React from 'react';
import { MapView } from 'expo';
import PropTypes from 'prop-types';
import { NavigationButton, CustomMarker } from '../../components';
import screens from '../../constants/screens';
import s from './styles';
import mapStyle from '../../styles/mapStyle';

const Home = ({
  location,
  posts,
  onMarkerPress,
}) => (
  <MapView
    style={s.root}
    customMapStyle={mapStyle}
    initialRegion={{
      ...location,
      latitudeDelta: 0.02,
      longitudeDelta: 0.013,
    }}
  >
    {
      posts.map((post) => {
        const { currentLocation } = post;
        return (
          <MapView.Marker
            key={post.id}
            coordinate={currentLocation}
            onPress={() => onMarkerPress(post)}
          />
        );
      })
    }
    <CustomMarker coordinate={location} iconName="ios-bicycle" />
  </MapView>
);

Home.propTypes = {
  location: PropTypes.object,
  posts: PropTypes.array,
  onMarkerPress: PropTypes.func,
};

Home.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerRight: <NavigationButton
    iconName="ios-add-outline"
    onPress={() => navigation.navigate(screens.PostEditor)}
  />,
});

export default Home;
