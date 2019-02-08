import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";
// import Toast from 'react-native-simple-toast';
import { data } from '../../mockData.js';
import LocationCard from './LocationCard.js';


class LocationList extends Component {
    state = { locations: [] };


    componentWillMount() {
        this.setState({ locations: data });
    }

    renderLocations() {
        return this.state.locations.map(location =>
            <LocationCard key={location.id} location={location} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderLocations()}
            </ScrollView>

        );
    }
}

// const AppNavigator = createStackNavigator({
//     Home: {
//       screen: HomeScreen
//     }
//   });
  
//   export default createAppContainer(AppNavigator);

export default LocationList;
