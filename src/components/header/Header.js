// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { CardSection } from '../common/CardSection';

// Make a component
class Header extends Component {
	onHambugerClick() {
		this.props.toggleDrawer;
	}

	render() {
		return (
			<View style={{ backgroundColor: this.props.headerColor }}>
				<CardSection>
					<TouchableOpacity
						onPress={this.onHambugerClick()}
						style={{
							alignContent: 'center',
							justifyContent: 'space-around',
							flex: 1,
							marginLeft: 10,
							width: 'auto',
							height: 'auto'
						}}
					>
						<Image
							style={{ width: 30, height: 30 }}
							source={{
								uri:
									'https://raw.githubusercontent.com/MariamaB/TouristGuide/master/src/assets/burger_menu_icon.png'
							}}
						/>
					</TouchableOpacity>

					<View style={this.styles.headerContentStyles}>
						<Text
							style={{
								color: this.props.headerTextColor,
								fontWeight: 'bold',
								fontSize: 20
							}}
						>
							{this.props.headerTitle}
						</Text>
						<Text style={{ color: this.props.headerTextColor, fontSize: 10 }}>{this.props.headerText}</Text>
					</View>

					<View style={this.styles.thumbnailContainerStyle}>
						<Image source={{ uri: this.props.picSrc }} style={this.styles.thumbnailStyle} />
					</View>
					<View style={this.styles.spaceholderStyle} />
				</CardSection>
			</View>
		);
	}

	styles = {
		thumbnailStyle: {
			width: 60,
			height: 30
		},
		thumbnailContainerStyle: {
			alignItems: 'center',
			justifyContent: 'center',
			flex: 1,
			width: 'auto',
			height: 'auto'
		},
		headerContentStyles: {
			flexDirection: 'column',
			justifyContent: 'space-around',
			flex: 3
		},
		spaceholderStyle: {
			flex: 0.5
		}
	};
}

// Make the component available to other parts of the app
export { Header };
