import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight }
  from 'react-native';

const heartIcon = require('./images/plain-heart.png');

//  to keep the state of an object we create a class ClassName {
class MainApp extends Component {
  state = {
    liked: false,
  }

  _onPressButton = () => {
    this.setState({
      state: !this.state.liked,
    });
  }

  //  define the content of the component inside render
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.btn}
          underlayColor='#fefefe'
        >
         <Image
           source={heartIcon}
           style={styles.icon}
         />
       </TouchableHighlight>
       <Text style={styles.text}> Do you like this app?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  marginTop: 50,
  alignItems: 'center',
  },
  btn: {
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1',
  },
  liked: {
    tintColor: '#e74c3c',
  },
  text: {
    marginTop: 20,
  },
});

export default MainApp;
