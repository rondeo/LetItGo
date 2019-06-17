
import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';








export default class FirstScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [{
          'id': 1,
          'title': "COM1",
          'distance': 500,
        }, {
          'id': 2,
          'title': "COM2",
          'distance': 200,
        }, {
          'id': 3,
          'title': "COM3",
          'distance': 600,
        }]
      }
    }

    componentDidMount() {
      this.state.data.sort(compare);
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
  
    renderItems = ({ item }) => (
      <ListItem
        title={item.title}
        rightTitle={item.distance}
        titleStyle={{ alignItems: 'center' }}
        onPress={() => this.props.navigation.navigate('Details', {
          locationCodeWord: item.title
        })}
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
            style={{ margin: 10 }}
  
          />
        </View>
      );
    }
  }

  function compare(a,b) {
    return a.distance - b.distance;
  }

  const styles = StyleSheet.create({
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