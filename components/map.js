import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class App extends React.Component {
    render() {
        return (
            <MapView 
                style={styles.map}
                initialRegion={{
                latitude: 53.729574,
                longitude: -1.659589,
                latitudeDelta: 0.002,
                longitudeDelta: 0.009
                }}
            >
            <MapView.Marker
                coordinate={{
                latitude: 53.729574,
                longitude: -1.659589
                }}
                title={'We are here...'}
                description={'2 The Crossings, WF17 0NE'}
            />
            </MapView>    
        );
    }
}

const styles = StyleSheet.create({
    map: {
        //width: 300,
        //height: 300,
        width: deviceWidth * 0.82,
        //marginRight: deviceWidth * 0.12,
        height: deviceHeight * 0.34,
        //borderWidth: 4,
        //borderColor: 'grey',
        //borderRadius: 6,
    }
}
);
