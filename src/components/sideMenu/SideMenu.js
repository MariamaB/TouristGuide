import { TouchableOpacity, View, Image, Text } from 'react-native';
import React, { Component } from 'react';
import fPsl from '../../assets/logo/fingerprint_sl.png';

class SideMenu extends Component {
	render() {
		return (
			<View style={this.styles.containerStyle}>
				{/* <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}> */}
				<Image
					source={{ uri: 'http://www.sierra-leone.org/Photos/DSC_0059.jpg' }}
					style={{ width: 300, height: 150 }}
				/>
				{/* </View> */}
				<View style={{ flex: 2, marginTop: 20 }}>
					<TouchableOpacity style={this.styles.borderStyle}>
						<View style={{ flexDirection: 'row' }}>
							<Image
								style={this.styles.iconStyle}
								source={{
									uri:
										'https://raw.githubusercontent.com/MariamaB/TouristGuide/feature/hamburger_menu/src/assets/icons/home_icon.png'
								}}
							/>
							<Text style={this.styles.textStyle}>Home</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={this.styles.borderStyle}>
						<View style={{ flexDirection: 'row' }}>
							<Image
								style={this.styles.iconStyle}
								source={{
									uri:
										'https://raw.githubusercontent.com/MariamaB/TouristGuide/feature/hamburger_menu/src/assets/icons/home_icon.png'
								}}
							/>
							<Text style={this.styles.textStyle}>Bookings</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={this.styles.borderStyle}>
						<View style={{ flexDirection: 'row' }}>
							<Image
								style={this.styles.iconStyle}
								source={{
									uri:
										'https://raw.githubusercontent.com/MariamaB/TouristGuide/feature/hamburger_menu/src/assets/icons/home_icon.png'
								}}
							/>
							<Text style={this.styles.textStyle}>Saved</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View
					style={{
						flex: 1,
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'flex-end'
					}}
				>
					<Image
						source={fPsl}
						style={{
							width: 30,
							height: 50
						}}
					/>
					<Text>&copy;Tourist Guide</Text>
				</View>
			</View>
		);
	}

	styles = {
		borderStyle: {
			// borderWidth: 1,
			borderRadius: 2,
			borderColor: '#ddd',
			borderBottomWidth: 1,
			height: 60,
			justifyContent: 'center'
		},
		containerStyle: {
			backgroundColor: '#fff',
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
		},
		textStyle: {
			fontSize: 20,
			justifyContent: 'center'
		},
		iconStyle: {
			width: 30,
			height: 25
		}
	};
}

export default SideMenu;
