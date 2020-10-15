import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMain from '../components/homeComponents/HomeMain'
import AllProducts from '../components/productComponents/AllProducts';
import AllProductTitle from '../components/productComponents/AllProductTitle';


const Stack = createStackNavigator();

export default function HomeScreen() {

  return (
      <Stack.Navigator>
          <Stack.Screen 
            name='Home' 
            component= {HomeMain} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name='AllProducts' 
            component= {AllProducts} 
            options={{ headerTitle: props => <AllProductTitle {...props} />,
            headerStyle: {
              shadowColor : '#5bc4ff',
              shadowOpacity: 0,
              shadowOffset: {
              height: 0,
              },
              shadowRadius: 0,
              elevation: 0 
            }}
            }
            // options={{headerShown: false}}
          />
      </Stack.Navigator>
  );
}
