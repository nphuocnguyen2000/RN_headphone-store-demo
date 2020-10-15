import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountMain from '../components/accountComponents/AccountMain';
const Stack = createStackNavigator();

export default function HomeScreen() {

  return (
      <Stack.Navigator>
          <Stack.Screen 
            name='Notify' 
            component= {AccountMain} 
            options={{ 
                headerShown: false
            }}
          />
      </Stack.Navigator>
  );
}
