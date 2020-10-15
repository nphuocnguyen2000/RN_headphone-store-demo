import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppTab from './AppTab'
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import NotifyScreen from '../screens/NotifyScreen';
import AccountScreen from '../screens/AccountScreen';
import DrawerContent from '../components/DrawContent'
import AppMain from './AppMain';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'red',
          activeBackgroundColor: 'red'
        }}
        drawerContent={props => <DrawerContent {...props}  /> } 
      >
          <Drawer.Screen name="HomeDrawer"    component={AppMain} />
          <Drawer.Screen name="CartScreen"    component={CartScreen} />
          <Drawer.Screen name="NotifyScreen"  component={NotifyScreen} />
          <Drawer.Screen name="SettingScreen" component={AccountScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
   
  );
}

