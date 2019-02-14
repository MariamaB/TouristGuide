// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import { CardSection } from './CardSection';

// Make a component
const Header = (props) => {
  const {
    thumbnailStyle,
    headerContentStyles,
    thumbnailContainerStyle,
    spaceholderStyle,
  } = styles;

  const { 
    // headerColor, 
    headerText, 
    headerTitle, 
    headerTextColor,
    picSrc,
    headerColor 
  } = props;

  return (
    <View style={{ backgroundColor: headerColor }}>
      <CardSection >
           
      <View style={spaceholderStyle} />

        <View style={headerContentStyles}>
          <Text 
          style={{ 
            color: headerTextColor, 
            fontWeight: 'bold', 
            fontSize: 20, }}
          >{headerTitle}</Text>
          <Text style={{ color: headerTextColor, fontSize: 10 }}>{headerText}</Text>
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
  thumbnailStyle: {
    width: 60,
    height: 30,
  },
  thumbnailContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 'auto',
    height: 'auto',
 

  },
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 3,
  },
  spaceholderStyle: {
    flex: 0.5,
  }
};

// Make the component available to other parts of the app
export { Header };
