import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
// import Toast from 'react-native-simple-toast';
import { Header } from './src/components/header/Header';
import LocationList from './src/components/locations/LocationList';
import HotelList from './src/components/hotels/HotelList';
import FlightList from './src/components/flights/FlightList';
import SideMenu from './src/components/sideMenu/SideMenu';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			intro: true,
			animating: false,
			align: 'center',
			alignsecond: false,
			activeTab: 'home',
			drawerOpen: false
		};
		setTimeout(
			() =>
				this.setState({ align: 'flex-start' }, function() {
					this.setState({ alignsecond: true });
					setTimeout(() => {
						this.setState({ intro: false });
					}, 3000);
				}),
			2000
		);

		this.toggleDrawer = this.toggleDrawer.bind(this);
		this.closeDrawer = this.closeDrawer.bind(this);
	}
	color = '#A3CECA';

	tabs = [
		{
			key: 'hotels',
			icon: 'building',
			label: 'Hotels',
			barColor: '#7FCD56',
			pressColor: 'rgba(255, 255, 255, 0.16)'
		},
		{
			key: 'home',
			icon: 'first-order',
			label: 'Home',
			barColor: '#92b9b5',
			pressColor: 'rgba(255, 255, 255, 0.16)'
		},
		{
			key: 'flights',
			icon: 'plane',
			label: 'Flights',
			barColor: '#6844A4',
			pressColor: 'rgba(255, 255, 255, 0.16)'
		}
	];

	toggleDrawer() {
		if (!this.state.drawerOpen) {
			this.setState({ drawerOpen: true });
			// Toast.show('Open Drawer set:' + this.state.drawerOpen, Toast.LONG);
		}
	}
	closeDrawer() {
		if (this.state.drawerOpen) {
			this.setState({ drawerOpen: false });
			// Toast.show('Close Dawer set:' + this.state.drawerOpen, Toast.LONG);
		}
	}

	renderIcon = (icon) => ({ isActive }) => <Icon isActive={isActive} size={24} color="white" name={icon} />;

	renderTab = ({ tab, isActive }) => (
		<FullTab isActive={isActive} key={tab.key} label={tab.label} renderIcon={this.renderIcon(tab.icon)} />
	);

	renderView = () => {
		switch (this.state.activeTab) {
			case 'home':
				return <LocationList />;
			case 'hotels':
				return <HotelList />;
			case 'flights':
				return <FlightList />;
			default:
				return <LocationList />;
		}
	};

	renderHeaderColor() {
		if (this.state.activeTab === 'home') {
			return '#A3CECA';
		}
		if (this.state.activeTab === 'hotels') {
			return '#7FCD56';
		}
		if (this.state.activeTab === 'flights') {
			return '#6844A4';
		}
	}

	renderHeaderTextColor() {
		if (this.state.activeTab === 'flights') {
			return '#e4e0e0';
		}
	}

	renderAppBackgroundColor() {
		if (this.state.activeTab === 'flights') {
			return '#562151';
		}
		if (this.state.activeTab === 'hotels') {
			return '#F4FFF8';
		}
		if (this.state.activeTab === 'home') {
			return '#F4FFFE';
		}
	}

	render() {
		if (this.state.intro) {
			return (
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'space-between',
						marginHorizontal: 40
					}}
				>
					<View style={{ marginTop: 120 }}>
						<Text style={{ color: '#4A8538', fontSize: 25, fontFamily: 'Journal' }}>Land that we</Text>
						<Text style={{ color: '#4A8538', fontSize: 25, fontFamily: 'Journal', textAlign: 'center' }}>
							love
						</Text>
					</View>

					{!this.state.alignsecond ? null : (
						<Image
							source={{
								uri:
									'https://raw.githubusercontent.com/MariamaB/TouristGuide/master/android/app/src/main/assets/ufj_sl2.png'
							}}
							style={{ width: 150, height: 150, marginBottom: 100 }}
						/>
					)}
				</View>
			);
		} else if (!this.state.intro) {
			return (
				<View style={{ flex: 1, backgroundColor: this.renderAppBackgroundColor() }}>
					<Drawer
						open={this.state.drawerOpen}
						type="static"
						tapToClose={true}
						openDrawerOffset={0.2}
						closedDrawerOffset={0}
						content={<SideMenu />}
						style={drawerStyles}
						tweenHandler={Drawer.tweenPresets.parallax}
						tweenEasing={'easeInOutQuad'}
						tweenDuration={400}
						onClose={this.closeDrawer}
					>
						<View style={{ flex: 1, backgroundColor: this.renderAppBackgroundColor() }}>
							<Header
								headerTitle={'Tourist Guide'}
								headerText={'Sierra Leone'}
								triggerToggleDrawer={this.toggleDrawer}
								// picSrc={
								// 	'https://raw.githubusercontent.com/MariamaB/TouristGuide/master/src/assets/headerLogo2.png'
								// }
								headerColor={this.renderHeaderColor()}
								headerTextColor={this.renderHeaderTextColor()}
							/>
							{this.renderView()}
						</View>
					</Drawer>
					<BottomNavigation
						onTabPress={(newTab) => this.setState({ activeTab: newTab.key })}
						activeTab={this.state.activeTab}
						renderTab={this.renderTab}
						tabs={this.tabs}
						useLayoutAnimation
					/>
				</View>
			);
		}
	}
}

const drawerStyles = {
	drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
	main: { paddingLeft: 3 }
};
// const styles = {
//   mainContentView:
//     padding: 5
//   }
// };
