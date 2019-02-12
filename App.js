import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { Header } from './src/components/common/Header';
import LocationList from './src/components/locations/LocationList';

export default class App extends Component {
  state = {
    activeTab: 'home'
  }

  color = 'A3CECA'

 tabs = [
   {
      key: 'hotels',
      icon: 'gamepad-variant',
      label: 'Hotels',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
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
        return <View><Text>{this.state.activeTab}</Text></View>;
      case 'flights':
      this.color = '#E64A19';
        return <View><Text>{this.state.activeTab}</Text></View>;
      default:
      this.color = '#A3CECA';
        return <LocationList />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          headerTitle={'Tourist Guide'}
          headerText={'Sierra Leone'}
          headerColor={'A3CECA'}
          picSrc={'http://sierraleonenationaltouristboard.com/wp-content/uploads/2018/07/logo.png'}
          pageName={this.state.activeTab}
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
