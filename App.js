import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
// import Toast from 'react-native-simple-toast';
import { Header } from './src/components/common/Header';
import LocationList from './src/components/locations/LocationList';
import HotelList from './src/components/hotels/HotelList';


export default class App extends Component {
  state = {
    activeTab: 'home',
    headerColor: ''
  }

color = '#A3CECA'

tabs = [
  {
     key: 'hotels',
     icon: 'gamepad-variant',
     label: 'Hotels',
     barColor: '#B71C1C',
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
     barColor: '#E64A19',
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
      this.color = '#A3CECA';
        return <LocationList />;
      case 'hotels':
      this.color = '#B71C1C';
        return <HotelList />;
      case 'flights':
      this.color = '#E64A19';
        return <View><Text>{this.state.activeTab}</Text></View>;
      default:
      this.color = '#A3CECA';
        return <LocationList />;
    }
  }

  renderHeaderColor() {
    if (this.state.activeTab === 'home') {
      return '#A3CECA';
    }
    if (this.state.activeTab === 'hotels') {
      return '#B71C1C';
    }
    if (this.state.activeTab === 'flights') {
      return '#E64A19';
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          headerTitle={'Tourist Guide'}
          headerText={'Sierra Leone'}
          picSrc={'http://sierraleonenationaltouristboard.com/wp-content/uploads/2018/07/logo.png'}
          headerColor={this.renderHeaderColor()}
        />

        {this.renderView()}
      
        <BottomNavigation
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          activeTab={this.state.activeTab}
          renderTab={this.renderTab}
          tabs={this.tabs}
          // useLayoutAnimation
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
