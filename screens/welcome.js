import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons style={styles.burger}
                name="menu"
                size={24}
                color="#b3b3b3"
                onPress={() => navigation.toggleDrawer()}
                />
                <MaterialIcons style={styles.basket}
                    name="shopping-cart"
                    size={24}
                    color="#b3b3b3"
                    onPress={() => navigation.navigate('Basket')}
                />
            </View>
            <Text style={styles.headerText}>WELCOME!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242424',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    headerText: {
        marginTop: 10,
        marginStart: 180,
        fontFamily: 'Teko',
        fontSize: 22,
        color: '#b3b3b3',
        textShadowColor: '#b3b3b3',
        textShadowRadius: 1,
        textDecorationLine: 'underline',

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    burger: {
        marginTop: 60,
        marginEnd: 270,
    },
    
    basket: {
        marginTop: 60,
        marginEnd: 50,
    },
});