import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PlayerScreen from '../screens/PlayerScreen';
import TeamScreen from '../screens/TeamScreen';
import PlayerList from '../screens/PlayerList';
import Dummy from '../screens/Dummy';


const Stack = createStackNavigator();

const AppStack = () => {

  return (
   <NavigationContainer>
      <Stack.Navigator
      headerMode='none' 
      >
      {/* <Stack.Screen name="Dummy" component={Dummy} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PlayerList" component={PlayerList} />
        <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
        <Stack.Screen name="TeamScreen" component={TeamScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default AppStack;
