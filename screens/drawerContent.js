import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export function DrawerContent(props) {
    return(
        <View style={{flex:1, backgroundColor: '#b3b3b3'}}>
            <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                  <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image size={70} source={require('../assets/menulogo.jpg')} />
                    <View style={{marginLeft: 25}}>
                      <Title style={styles.title}>ANDY KIRBY</Title>
                    </View>
                  </View>
                </View>
              </View>

              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={({color, size}) => (
                    <MaterialCommunityIcons name="home-outline" size={size} color={color} />)}
                  label="Home"
                  onPress={() => {props.navigation.navigate('Home')}}
                  />
              <DrawerItem
                  icon={({color, size}) => (
                    <MaterialCommunityIcons name="information-outline" size={size} color={color} />)}
                  label="About"
                  onPress={() => {props.navigation.navigate('Contact')}}
                  />
              </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
              <DrawerItem
                    icon={({color, size}) => (
                      <MaterialCommunityIcons name='exit-to-app' size={size} color={color} />)}
                    label="Sign Out"
                    onPress={() => {props.navigation.navigate('Sign Out')}}
                    />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontFamily: 'Teko',
      fontSize: 26,
      marginTop: 23,
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 25,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });