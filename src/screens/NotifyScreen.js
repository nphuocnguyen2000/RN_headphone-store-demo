import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import NotifyMain from '../components/notifyComponents/NotifyMain';
const Stack = createStackNavigator();
const screenWidth = Dimensions.get('window').width;
export default function HomeScreen() {

  return (
      <Stack.Navigator>
          <Stack.Screen 
            name='Notify' 
            component= {NotifyMain} 
            options={{ 
                title: 'Thông báo',  
            }}
          />
      </Stack.Navigator>
  );
}
