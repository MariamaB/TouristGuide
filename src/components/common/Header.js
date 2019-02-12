// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import { CardSection } from './CardSection';

// Make a component
const Header = (props) => {
  const {
    thumbnailStyle,
    headerContentStyles,
    headerTextStyle,
    thumbnailContainerStyle,
    textStyle
  } = styles;

  return (
    <View style={{ backgroundColor: props.backgroundColor }}>
      <CardSection >
        <View style={headerContentStyles}>
          <Text style={headerTextStyle}>{props.headerTitle}</Text>
          <Text style={textStyle}>{props.headerText}</Text>
        </View>
        <View style={thumbnailContainerStyle}>
          <View
            style={{
              width: 'auto',
              height: 'auto',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              elevation: 5,
              backgroundColor: '#000'
            }}
          >
            <Image
              source={{ uri: props.picSrc }}
              style={thumbnailStyle}
            />
          </View>
        </View>
      </CardSection>
      <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#daebe9', fontSize: 10 }}>{props.pageName}</Text>
        </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    marginLeft: 20,
  },
  thumbnailStyle: {
    width: 100,
    height: 50,
    elevation: 11,
              backgroundColor: '#000'
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    alignItems: 'center',
    padding: 10,
    flex: 1,


  },
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 2,
  },
  headerTextStyle: {
    fontSize: 30,
    marginLeft: 20
  }

};

// Make the component available to other parts of the app
export { Header };
