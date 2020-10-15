import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartMain from '../components/cartComponents/CartMain';
const Stack = createStackNavigator();
export default function HomeScreen() {

  return (
      <Stack.Navigator>
          <Stack.Screen 
            name='Cart' 
            component= {CartMain} 
            options={{ 
                title: 'Giỏ hàng của tôi',  
            }}
          />
      </Stack.Navigator>
  );
}
