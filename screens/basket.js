import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function Basket({ navigation }) {
    return (
        <View style={styles.container}>
            <MaterialIcons 
                style={styles.back}
                name="arrow-back"
                size={24}
                color="#b3b3b3"
                onPress={() => navigation.goBack()}
            />
            <Text style={styles.text}>BASKET!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242424',

    },

    back: {
        marginTop: deviceHeight * 0.05,
        marginLeft: deviceWidth * 0.07,
    },
    
    text: {
        marginTop: 10,
        alignSelf: 'center',
        fontFamily: 'Teko',
        fontSize: 22,
        color: '#b3b3b3',
        textShadowColor: '#b3b3b3',
        textShadowRadius: 1,
        textDecorationLine: 'underline',
    }

});
