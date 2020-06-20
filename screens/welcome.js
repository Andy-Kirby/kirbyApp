import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                style={styles.burger}
                name="menu"
                size={24}
                color="#b3b3b3"
                onPress={() => navigation.toggleDrawer()}
                />
                <MaterialIcons
                    style={styles.basket}
                    name="shopping-cart"
                    size={24}
                    color="#b3b3b3"
                    onPress={() => navigation.navigate('Basket')}
                />
            </View>
            <Text style={styles.headerText}>WELCOME!</Text>
        </View>
    );
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
        alignSelf: 'center',
        fontFamily: 'Teko',
        fontSize: 22,
        color: '#b3b3b3',
        textShadowColor: '#b3b3b3',
        textShadowRadius: 1,
        textDecorationLine: 'underline',

    },

    header: {
        flexDirection: 'row',
        //justifyContent: 'flex-end'
    },

    burger: {
        marginTop: deviceHeight * 0.05,
        marginLeft: deviceWidth * 0.07,
        //marginEnd: 270,
    },
    
    basket: {
        marginTop: deviceHeight * 0.05,
        marginLeft: deviceWidth * 0.72,
    },
});
