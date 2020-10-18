import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountMain from '../components/accountComponents/AccountMain';
const Stack = createStackNavigator();

export default function HomeScreen() {

  return (
      <Stack.Navigator>
          <Stack.Screen 
            name='Account' 
            component= {AccountMain} 
            options={{ 
                headerShown: false
            }}
          />
      </Stack.Navigator>
  );
}
