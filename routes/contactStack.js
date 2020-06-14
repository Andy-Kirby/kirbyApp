import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../screens/contact';

const ContactStack = createStackNavigator();

function App() {
  return (
      <ContactStack.Navigator headerMode={false}>
        <ContactStack.Screen name="Contact" component={Contact} />
      </ContactStack.Navigator>
  );
}

export default App;