import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Basket({ navigation }) {
    return (
        <View style={styles.container}>
            <MaterialIcons style={styles.back}
                name="arrow-back"
                size={24}
                color="#b3b3b3"
                onPress={() => navigation.goBack()}
                />
            <Text style={styles.text}>BASKET!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242424',

    },

    back: {
        marginTop: 60,
        marginLeft: 55,
    },
    
    text: {
        margin: 160,
        fontFamily: 'Teko',
        fontSize: 22,
        color: '#b3b3b3',
        textShadowColor: '#b3b3b3',
        textShadowRadius: 1,
        marginTop: 5,
    }

});