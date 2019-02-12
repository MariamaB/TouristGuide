import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, Button } from '../common';


const HotelCard = ({ hotel }) => {
    const { image, title, price } = hotel;
    const { 
        imageStyle, 
        titleTextStyle, 
        textContainerStyle, 
        contentTextStyle, 
        priceContainerStyle 
    } = styles;
    return (
        <Card>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <View style={textContainerStyle}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <View style={priceContainerStyle}> 
                        <View style={{ flexDirection: 'column' }}>
                        <Text style={contentTextStyle}>Per Night: </Text>
                        <Text style={contentTextStyle}>2 adults </Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                        <Text style={contentTextStyle}>EU: {price.eu}</Text>
                        <Text style={contentTextStyle}>US: {price.us}</Text>
                        </View>
                    </View>
                </View>
            </CardSection>
            <CardSection>
                <Button>{'View Deals'}</Button>
            </CardSection>
        </Card>

    );
};

const styles = {

    imageStyle: {
        height: 200,
        flex: 1,
        width: null
    },
    textContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    priceContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    titleTextStyle: {
        fontWeight: 'bold'
    },
    contentTextStyle: {
        fontSize: 7
    }
};

export default HotelCard;
