import React from 'react';
import ImageGallery from './screens/ImageGallery';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailImage from './screens/DetailImage';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ImageGallery} />
        <Stack.Screen name="DetailImage" component={DetailImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
