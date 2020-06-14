import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome';
import Basket from '../screens/basket';
import SignIn from '../screens/signin'


// Navigation
const HomeStack = createStackNavigator();

function App() {
  return (
      <HomeStack.Navigator headerMode={false}>
        <HomeStack.Screen name="Home" component={Welcome} />
        <HomeStack.Screen name="Basket" component={Basket} />
        <HomeStack.Screen name="Sign Out" component={SignIn} />
      </HomeStack.Navigator>
  );
}

export default App;