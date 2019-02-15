import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
// import Toast from 'react-native-simple-toast';
import { Header } from './src/components/common/Header';
import LocationList from './src/components/locations/LocationList';
import HotelList from './src/components/hotels/HotelList';
import FlightList from './src/components/flights/FlightList';


export default class App extends Component {
  state = {
    activeTab: 'flights',
  }

color = '#A3CECA'

tabs = [
  {
     key: 'hotels',
     icon: 'gamepad-variant',
     label: 'Hotels',
     barColor: '#7FCD56',
     pressColor: 'rgba(255, 255, 255, 0.16)',
 },
   {
     key: 'home',
     icon: 'movie',
     label: 'Home',
     barColor: '#92b9b5',
     pressColor: 'rgba(255, 255, 255, 0.16)'
   },
   {
     key: 'flights',
     icon: 'music-note',
     label: 'Flights',
     barColor: '#6844A4',
     pressColor: 'rgba(255, 255, 255, 0.16)'
   }
  ]

  renderIcon = icon => ({ isActive }) => (
     <Icon isActive={isActive} size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

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
  }

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
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: this.renderAppBackgroundColor() }}>
        <Header
          headerTitle={'Tourist Guide'}
          headerText={'Sierra Leone'}
          picSrc={'https://raw.githubusercontent.com/MariamaB/TouristGuide/master/src/assets/headerLogo2.png'}
          headerColor={this.renderHeaderColor()}
          headerTextColor={this.renderHeaderTextColor()}
        />
  
            {this.renderView()}

        <BottomNavigation
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          activeTab={this.state.activeTab}
          renderTab={this.renderTab}
          tabs={this.tabs}
          useLayoutAnimation
        />
    </View>
   );
  }
}

// const styles = {
//   mainContentView:
//     padding: 5
//   }
// };
