import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from '../common';


const FlightCard = ({ flight }) => {
    const { logo, title, times, icon, price } = flight;
    const { logoStyle, iconStyle, titleTextStyle, detailsContainerStyle, detailsStyle, priceContainerStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={titleTextStyle}>
                    <Text>{title}</Text>
                </View>
            </CardSection>

            <CardSection>
                <View style={detailsContainerStyle}>

                <View style={detailsStyle}>
                    <Image style={logoStyle} source={{ uri: logo }} />
                    <Text> {times.startlocation.depart} </Text>
                    <Text> TXL </Text>
                    <Text style={{ lineHeight: 5 }}> {} </Text>
                    <Text> FNA </Text>
                    <Text>{times.startlocation.arrive}</Text>
                </View>

                <View style={detailsStyle}>
                    <Image style={logoStyle} source={{ uri: logo }} />
                    <Text> {times.destinylocation.depart} </Text>
                    <Text> FNA </Text>
                    <Text style={{ lineHeight: 5 }} />
                    <Text> TXL </Text>
                    <Text>{times.destinylocation.arrive}</Text>
                </View>
                </View>
            </CardSection>

            <CardSection>
                <View style={priceContainerStyle}>
                <View>
                    <Image style={iconStyle} source={{ uri: icon }} />
                    <Text> {price.total} </Text>
                </View>
                <View>
                    <Text> {price.single} </Text>
                </View>
                </View>
            </CardSection>
        </Card>

    );
};

const styles = {

    titleTextStyle: {
        // fontWeight: 'bold'
    },
    detailsContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    detailsStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    logoStyle: {
        height: 20,
        width: null
    },
    priceContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    iconStyle: {
        height: 30,
        width: null
    },
   
};

export default FlightCard;
