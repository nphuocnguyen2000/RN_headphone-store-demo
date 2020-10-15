import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'
import React from 'react';
import AppDrawNav from './src/app/AppDrawNav';
import store from './src/redux/store/index'
export default function App() {
  return (
    <Provider store={store}>
      <AppDrawNav />
    </Provider>
  );
}

