import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Map from '../components/map.js';


export default function Contact({ navigation }) {
    return (
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
                <View style={styles.modalContainer}>
                    <MaterialIcons style={styles.burger}
                        name="menu"
                        size={24}
                        color="#b3b3b3"
                        onPress={() => navigation.toggleDrawer()}
                    />
                    <View style={styles.mainHeader}>
                        <Text style={styles.modalHeader}>FIND US</Text>
                    </View>
                    <View style={styles.map}>
                        <Map />
                    </View>
                    <Text style={[styles.modalHeader,{ marginLeft: 57, marginTop: 25, marginBottom: 10 }]}>CONTACT US</Text>
                    <View style={styles.messageContainer}>
                        <TextInput style={styles.message}
                            placeholder="Name"
                            placeholderTextColor="#cfcfcf"
                            selectionColor="#fff"
                            keyboardType="email-address"
                        />
                        <TextInput style={styles.message}
                            placeholder="E-Mail"
                            placeholderTextColor="#cfcfcf"
                            selectionColor="#fff"
                            keyboardType="email-address"
                        />
                        <TextInput style={styles.message}
                            multiline={true}
                            height= {150}
                            placeholder="Message..."
                            placeholderTextColor="#cfcfcf"
                            selectionColor="#fff"
                            keyboardType="email-address"
                        />
                        <Text style={styles.login}>SUBMIT</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#242424',
    },

    burger: {
        marginTop: 60,
        marginLeft: 55,
        marginBottom: 10,
    },

    mainHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    
    modalHeader: {
        marginTop: 0,
        marginLeft: 57,
        fontFamily: 'Teko',
        fontSize: 20,
        color: '#b3b3b3',
        textShadowColor: '#b3b3b3',
        textShadowRadius: 1,
        textDecorationLine: 'underline',
    },

    map: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 15,
    },

    messageContainer: {
        alignItems: "center",
    },

    message: {
        width: 300,
        paddingVertical: 8,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        fontFamily: 'Teko',
        color: '#dedede',
        marginVertical: 10
    },

    login: {
        flexDirection: 'row',
        margin: 92,
        fontFamily: 'Teko',
        fontSize: 20,
        color: '#b3b3b3',
        textShadowColor: '#b3b3b3',
        textShadowRadius: 1,
        marginTop: 5,
    },
});