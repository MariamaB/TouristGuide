import React, { Component } from 'react';
import { ScrollView } from 'react-native';
// import Toast from 'react-native-simple-toast';
import { data } from '../../mockData/hotelData';
import HotelCard from './HotelCard';


class HotelList extends Component {
    state = { hotels: [] };


    componentWillMount() {
        this.setState({ hotels: data });
    }

    renderHotels() {
        return this.state.hotels.map(hotel =>
            <HotelCard key={hotel.id} hotel={hotel} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderHotels()}
            </ScrollView>

        );
    }
}


export default HotelList;
