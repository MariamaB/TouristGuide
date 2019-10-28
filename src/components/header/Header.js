// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { CardSection } from '../common/CardSection';
import imgSrc from '../../assets/icons/menu_icon_col_480.png';

// Make a component
class Header extends Component {
	onHambugerClick() {
		// this.props.triggerToggleDrawer();
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
	render() {
		return (
			<View style={{ backgroundColor: this.props.headerColor }}>
				<CardSection>
					<TouchableOpacity
						onPress={this.props.triggerToggleDrawer}
						style={{
							alignContent: 'center',
							justifyContent: 'space-around',
							flex: 1,
							marginLeft: 10,
							width: 'auto',
							height: 'auto'
						}}
					>
						<Image style={{ width: 40, height: 40 }} source={imgSrc} />
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
}

// Make the component available to other parts of the app
export { Header };
