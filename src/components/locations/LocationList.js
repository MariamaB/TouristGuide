import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import Toast from 'react-native-simple-toast';
import { data } from '../../mockData/locationData';
import LocationCard from './LocationCard';


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


export default LocationList;
