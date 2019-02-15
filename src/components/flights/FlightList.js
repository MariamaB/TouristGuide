import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import Toast from 'react-native-simple-toast';
import { data } from '../../mockData/flightData';
import FlightCard from './FlightCard';


class FlightList extends Component {
    state = { flights: [] };


    componentWillMount() {
        this.setState({ flights: data });
    }

    renderflights() {
        return this.state.flights.map(flight =>
            <FlightCard key={flight.id} flight={flight} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderflights()}
            </ScrollView>
        );
    }
}


export default FlightList;
