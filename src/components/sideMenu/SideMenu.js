import { TouchableOpacity, View, Image, Text } from 'react-native';
import React, { Component } from 'react';

class SideMenu extends Component {
	render() {
		return (
			<View style={this.styles.containerStyle}>
				<View style={{}}>
					<Image
						source={{
							uri: 'https://raw.githubusercontent.com/MariamaB/TouristGuide/master/src/assets/SLlogo.png'
						}}
						style={{ width: '100%', height: '40%', backgroundColor: '#000' }}
					/>
				</View>
				<View style={{ height: '80%' }}>
					<TouchableOpacity style={this.styles.borderStyle}>
						<View>
							<Image
								style={{ width: 30, height: 25 }}
								source={{
									uri:
										'https://raw.githubusercontent.com/MariamaB/TouristGuide/master/src/assets/burger_menu_icon.png'
								}}
							/>
							<Text>Home</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={this.styles.borderStyle}>
						<View>
							<Image
								style={{ width: 30, height: 25 }}
								source={{
									uri:
										'https://raw.githubusercontent.com/MariamaB/TouristGuide/master/src/assets/burger_menu_icon.png'
								}}
							/>
							<Text>Bookings</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={this.styles.borderStyle}>
						<View>
							<Image
								style={{ width: 30, height: 25 }}
								source={{
									uri:
										'https://raw.githubusercontent.com/MariamaB/TouristGuide/master/src/assets/burger_menu_icon.png'
								}}
							/>
							<Text>Saved</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	styles = {
		borderStyle: {
			// borderWidth: 1,
			borderRadius: 2,
			borderColor: '#ddd',
			borderBottomWidth: 1
		},
		containerStyle: {
			backgroundColor: '#CBCFCF',
			flex: 1,
			borderWidth: 1,
			borderRadius: 2,
			borderColor: '#ddd',
			borderBottomWidth: 0,
			borderTopWidth: 0,
			shadowColor: '#000',
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 2,
			elevation: 1
		}
	};
}

export default SideMenu;
