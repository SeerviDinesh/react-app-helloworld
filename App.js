/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button } from 'react-native';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.col, styles.example]}>Hay Dinesh Seervi This is Your Very First Native App.</Text>
      </View>
    );
  }
}
<Button
  onPress={() => {
    Alert.alert('You tapped the button!');
  }}
  title="Press Me"
/>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A5ACFF',
  },
  example: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  col: {
    color: '#afa',
  }
});
