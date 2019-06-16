/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

//External Libraries
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MapView from 'react-native-maps';
import { Card, ListItem } from 'react-native-elements';


class DetailsScreen extends Component {

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <MapView
          style={styles.maps}
          showsUserLocation={true}
          region={this.props.coordinate}
          followsUserLocation={true}
        >
          <Button title='testin' />
        </MapView>

      </ScrollView>
    )
  }
}

class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        'id': 1,
        'title': "COM1",
        'distance': "500m",
      }, {
        'id': 2,
        'title': "COM2",
        'distance': "200m",
      }, {
        'id': 3,
        'title': "COM3",
        'distance': "600m",
      }]
    }
  }

  // Make the sticky sorting header
  renderHeader = () => (
    <View>
      <View style={styles.stickyHeader}>
        <Text style={styles.stickyHeaderText}>
          Name
      </Text>
        <Text style={styles.stickyHeaderText}>
          Distance
      </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 20
        }}
      />
    </View>
  )

  renderItems = ({item}) => (
    <ListItem
      title = {item.title}
      rightTitle = {item.distance}
      titleStyle = {{alignItems: 'center'}}
    />
  )


  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItems}
          ListHeaderComponent={this.renderHeader}
          stickyHeaderIndices={[0]}
          style = {{margin: 10}}
        />
      </View>
    );
  }
}

const nav = createStackNavigator(
  {
    First: FirstScreen,
    Details: DetailsScreen
  }, {
    initialRouteName: 'First',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7a5901',
        title: 'Testing'
      },
    }
  },
)

const AppContainer = createAppContainer(nav);


export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const styles = StyleSheet.create({
  maps: {
    flex: 1,
    height: 400
  },
  stickyHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    opacity: 100
  },
  stickyHeaderText: {
    fontSize: 20,
  }
});
