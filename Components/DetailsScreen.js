import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';




export default class DetailsScreen extends Component {


  render() {
    const locationCodeWord = this.props.navigation.getParam('locationCodeWord', 'Default');
    const locations = {
      'COM1': {
        coordinate : {
          latitude: 1.294845,
          longitude: 103.773761
        }        
      },
      'COM2': {
        coordinate : {
          latitude: 1.356949,
          longitude: 103.960800,
        }        
      },
    };


    const marker = locations[locationCodeWord].coordinate;


    return (
      <ScrollView style={{ flex: 1 }}>
        <MapView
          style={styles.maps}
          showsUserLocation={true}
          region={this.props.coordinate}
          followsUserLocation={true}
        >
          <Marker
            coordinate={marker}
            title= "I AM HERE"
          />
        </MapView>

      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  maps: {
    flex: 1,
    height: 400
  }
});