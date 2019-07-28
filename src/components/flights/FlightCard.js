import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from '../common';

const FlightCard = ({ flight }) => {
	const { logo, title, times, icon, price } = flight;
	const { logoStyle, iconStyle, textStyle, detailsContainerStyle, detailsStyle, priceContainerStyle } = styles;

	return (
		<Card>
			<View style={{ backgroundColor: '#fff' }}>
				<CardSection>
					<View style={{ flex: 1 }}>
						<View>
							<Text>{title}</Text>
						</View>

						<View style={detailsContainerStyle}>
							<View style={detailsStyle}>
								<Image style={logoStyle} source={{ uri: logo }} />
								<Text style={textStyle}> {times.startlocation.depart} </Text>
								<Text> TXL </Text>
								<Text style={{ lineHeight: 5 }}>{}</Text>
								<Text> FNA </Text>
								<Text style={textStyle}>{times.startlocation.arrive}</Text>
							</View>

							<View style={detailsStyle}>
								<Image style={logoStyle} source={{ uri: logo }} />
								<Text style={textStyle}> {times.destinylocation.depart} </Text>
								<Text> FNA </Text>
								<Text style={{ lineHeight: 5 }}>{}</Text>
								<Text> TXL </Text>
								<Text style={textStyle}>{times.destinylocation.arrive}</Text>
							</View>
						</View>
					</View>
				</CardSection>

				<CardSection>
					<View style={priceContainerStyle}>
						<View style={{ flexDirection: 'row', padding: 5 }}>
							<Image style={iconStyle} source={{ uri: icon }} />
							<Text style={{ fontSize: 10 }}> {price.total} </Text>
						</View>
						<View>
							<Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000' }}> {price.single} </Text>
						</View>
					</View>
				</CardSection>
			</View>
		</Card>
	);
};

const styles = {
	textStyle: {
		color: '#000',
		fontWeight: 'bold'
	},
	detailsContainerStyle: {
		// flex: 1,
		flexDirection: 'column',
		// backgroundColor: '#ffccff',
		justifyContent: 'space-around',
		height: 90,
		padding: 10
	},
	detailsStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around'
		// backgroundColor: '#66ff33'
	},
	logoStyle: {
		height: 20,
		width: 20
	},
	priceContainerStyle: {
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flex: 1
		// backgroundColor: '#66ff33'
	},
	iconStyle: {
		height: 10,
		width: 10
	}
};

export default FlightCard;
