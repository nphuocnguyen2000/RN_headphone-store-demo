import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeMain from '../components/homeComponents/HomeMain'
import AllProducts from '../components/productComponents/AllProducts';
import AllProductTitle from '../components/productComponents/AllProductTitle';
import DetailProduct from '../components/productComponents/DetailProduct';
import { Easing, Animated } from 'react-native';

const Stack = createStackNavigator();

export default function HomeScreen() {
  //forFadeFromBottomAndroid
  return (
      <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
      }}
      >
          <Stack.Screen 
            name='Home' 
            component= {HomeMain} 
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name='AllProducts' 
            component= {AllProducts} 
            options={{headerShown: false}}
            // options={{headerShown: false}}
          />
          <Stack.Screen 
            name='DetailProduct'
            component= {DetailProduct} 
            options= {{
              headerShown: false
            }}
          />
      </Stack.Navigator>
  );
}
