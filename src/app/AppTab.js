import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Feather, Entypo, SimpleLineIcons, FontAwesome, AntDesign} from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import NotifyScreen from '../screens/NotifyScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
import {useSelector} from 'react-redux'
export default function App() {
  const carts = useSelector(state => state.carts)
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#311b92',
          inactiveTintColor: '#262626',
          style: {
              paddingVertical: 5
          }
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel:() => {return null},
            tabBarIcon: ({color}) => (
              <Entypo name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel:() => {return null},
            tabBarIcon: ({color}) => (
              <AntDesign name="search1" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel:() => {return null},
            tabBarIcon: ({color}) => (
              <SimpleLineIcons name="handbag" size={25} color={color} />
            ),
          tabBarBadge: carts.length
          }}
        />
        <Tab.Screen
          name="Notify"
          component={NotifyScreen}
          options={{
            tabBarLabel:() => {return null},
            tabBarIcon: ({color}) => (
              <Feather name="bell" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel:() => {return null},
            tabBarIcon: ({color}) => (
              <FontAwesome name="user" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator> 
  );
}

