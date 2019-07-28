import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import { Card, CardSection } from '../common';

const LocationCard = ({ location }) => {
	const { image, title, content, url } = location;
	const { imageStyle, titleTextStyle, textContainerStyle, contentTextStyle } = styles;
	return (
		<Card>
			<TouchableOpacity onPress={() => Linking.openURL(url)}>
				<View style={{ backgroundColor: '#fff' }}>
					<CardSection>
						<Image style={imageStyle} source={{ uri: image }} />
					</CardSection>

					<CardSection>
						<View style={textContainerStyle}>
							<Text style={titleTextStyle}>{title}</Text>
							<Text style={contentTextStyle}>{content}</Text>
						</View>
					</CardSection>
				</View>
			</TouchableOpacity>
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
		justifyContent: 'space-around',
		backgroundColor: '#F7FBFB'
	},
	titleTextStyle: {
		fontWeight: 'bold',
		fontSize: 15
	},
	contentTextStyle: {
		fontSize: 15
	}
};

export default LocationCard;
