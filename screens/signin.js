import React, { useEffect }from 'react';
import { 
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import Map from '../components/map';


// Firebase Services Configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCEz1hjWJpWkUYQcjcSgUb68vKB4WY-3Q',
  authDomain: 'kirbyapp-e5ce8.firebaseapp.com',
  databaseURL: 'https://kirbyapp-e5ce8.firebaseio.com',
  projectId: 'kirbyapp-e5ce8',
  storageBucket: 'kirbyapp-e5ce8.appspot.com',
  messagingSenderId: '300172653576',
  appId: '1:300172653576:web:de2771e690217bf26f0dbd',
  measurementId: 'G-XEW7NZ6GCS'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = firebase.analytics();

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
          email: '',
          password: '',
          isModalVisible: false
        });
    }
    openModal = () => {
        this.setState({
            isModalVisible: true
        });
    }
    closeModal = () => {
        this.setState({
            isModalVisible: false
        });
    }
    
    loginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
                console.log(user);
            });
        }
        catch (error) {
            console.log(error.toString());
        }
    }
    
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                <View style={styles.container}>
                    <Image source={require('../assets/logo.png')} style={styles.logo} />
                    <TextInput 
                        style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Username"
                        placeholderTextColor="#cfcfcf"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onChangeText={(email) => this.setState({ email })}
                        onSubmitEditing={() => this.password.focus()}
                        blurOnSubmit={false}
                    />
                    <TextInput 
                        style={styles.inputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder="Password"
                        secureTextEntry
                        placeholderTextColor="#cfcfcf"
                        autoCapitalize='none'
                        onChangeText={(password) => this.setState({ password })}
                        ref={(input) => this.password = input}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.login} onPress={() => this.openModal()}>ABOUT</Text>
                        <Text style={styles.login} onPress={() => this.loginUser(this.state.email, this.state.password)}>LOGIN</Text>
                    </View>
                    <Modal visible={this.state.isModalVisible} animationType='slide'>
                        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                            <View style={styles.modalContainer}>
                                <MaterialIcons
                                    style={styles.close}
                                    name="close" 
                                    size={24} 
                                    color="#b3b3b3" 
                                    onPress={() => this.closeModal()}
                                />
                                <ScrollView>
                                    <View style={styles.mainHeader}>
                                        <Text style={styles.modalHeader}>FIND US</Text>
                                    </View>
                                    <View style={styles.mapInsert}>
                                        <Map />
                                    </View>
                                    <Text style={[styles.modalHeader, { marginLeft: deviceWidth * 0.08, marginTop: 25, marginBottom: 10 }]}>CONTACT US</Text>
                                    <View style={styles.messageContainer}>
                                        <TextInput 
                                            style={styles.message}
                                            placeholder="Name"
                                            placeholderTextColor="#cfcfcf"
                                            selectionColor="#fff"
                                            keyboardType="email-address"
                                        />
                                        <TextInput 
                                            style={styles.message}
                                            placeholder="E-Mail"
                                            placeholderTextColor="#cfcfcf"
                                            selectionColor="#fff"
                                            keyboardType="email-address"
                                        />
                                        <TextInput 
                                            style={styles.message}
                                            multiline
                                            height={150}
                                            placeholder="Message..."
                                            placeholderTextColor="#cfcfcf"
                                            selectionColor="#fff"
                                            keyboardType="email-address"
                                        />
                                        <Text style={styles.login}>SUBMIT</Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>

                    
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
       
        backgroundColor: '#242424',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputBox: {
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
        //flexDirection: 'row',
        margin: 92,
        fontFamily: 'Teko',
        fontSize: 20,
        color: '#b3b3b3',
        textShadowColor: '#b3b3b3',
        textShadowRadius: 1,
        marginTop: 5,
    },

    logo: {
        //position: 'absolute',
        marginTop: -20,
        marginBottom: 50,
        width: 200,
        height: 250,
    },
    
    modalContainer: {
        flex: 1,
        backgroundColor: '#242424',
    },

    mainHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    
    close: {
        marginTop: deviceHeight * 0.05,
        //marginLeft: 55,
        marginLeft: deviceWidth * 0.07,
        marginBottom: 10,
    },

    modalHeader: {
        marginTop: 0,
        //marginLeft: 57,
        marginLeft: deviceWidth * 0.08,
        fontFamily: 'Teko',
        fontSize: 20,
        color: '#b3b3b3',
        textShadowColor: '#b3b3b3',
        textShadowRadius: 1,
        textDecorationLine: 'underline',
    },

    mapInsert: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: deviceWidth * 0.08,
        marginRight: deviceWidth * 0.08,
        marginTop: 15,
        borderWidth: 4,
        borderRadius: 6,
        borderColor: 'grey',
        overflow: 'hidden'
    },

    messageContainer: {
        alignItems: 'center',
    },

    message: {
        width: deviceWidth * 0.84,
        paddingVertical: 8,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        fontFamily: 'Teko',
        color: '#dedede',
        marginVertical: 10
    },

});
