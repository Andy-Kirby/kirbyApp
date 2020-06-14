import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
    render() {
        return(
            <MapView style={styles.map}
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
                title={"We are here..."}
                description={"2 The Crossings, WF17 0NE"}
            />
            </MapView>    
        );
    }
}

const styles = StyleSheet.create({
    map: {
        width: 300,
        height: 300,
        borderWidth: 4,
        borderColor: "grey",
        borderRadius: 6,
    }
}
)