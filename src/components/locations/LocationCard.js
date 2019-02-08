import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from '../common';


const LocationCard = ({ location }) => {
    const { image, title, content } = location;
    const { imageStyle, titleTextStyle, textContainerStyle, contentTextStyle } = styles;
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
                    <Text style={contentTextStyle}>{content}</Text>
                </View>
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
    titleTextStyle: {
        fontWeight: 'bold'
    },
    contentTextStyle: {
        fontSize: 7
    }
};

export default LocationCard;
