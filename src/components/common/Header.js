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
    spaceholderStyle,
    textStyle
  } = styles;

  const { 
    // headerColor, 
    headerText, 
    headerTitle, 
    picSrc,
    headerColor 
  } = props;

  return (
    <View style={{ backgroundColor: headerColor }}>
      <CardSection >
           
      <View style={spaceholderStyle} />

        <View style={headerContentStyles}>
          <Text style={headerTextStyle}>{headerTitle}</Text>
          <Text style={textStyle}>{headerText}</Text>
        </View>

        <View style={thumbnailContainerStyle}>
            <Image
              source={{ uri: picSrc }}
              style={thumbnailStyle}
            />
        </View>
        <View style={spaceholderStyle} />
      </CardSection>
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
  thumbnailStyle: {
    width: 60,
    height: 30,
  },
  thumbnailContainerStyle: {
    // marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 15,
    flex: 1,
    width: 'auto',
    height: 'auto',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // elevation: 0.1,
    // backgroundColor: '#000'

  },
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 3,
    // backgroundColor: '#30a9d8'
  },
  spaceholderStyle: {
    flex: 0.5,
    // backgroundColor: '#ffffff'
  },
  headerTextStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    // marginLeft: 20
  },
  textStyle: {
    // marginLeft: 20,
    fontSize: 10
  }

};

// Make the component available to other parts of the app
export { Header };
