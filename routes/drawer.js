import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import ContactStack from './contactStack';
import SignIn from '../screens/signin';
import { DrawerContent } from '../screens/drawerContent';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" style={{overlayColor:'red'}}
            drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Contact" component={ContactStack} />
          <Drawer.Screen name="Sign Out" component={SignIn} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }