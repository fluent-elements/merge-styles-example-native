/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { mergeStyles, Stylesheet } from 'merge-styles-native';

const stylesheet = Stylesheet.getInstance();

const containerStyle = mergeStyles({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF'
});

const textStyle = mergeStyles({
  textAlign: 'center'
});

const welcomeStyle = mergeStyles(
  textStyle,
  {
    fontSize: 20,
    margin: 10
  }
);

const instructionsStyle = mergeStyles(
  textStyle,
  {
    marginBottom: 5
  }
);

const redStyle = mergeStyles({
  color: '#aa3333'
});

const blueStyle = mergeStyles({
  color: '#3333aa'
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={stylesheet.getStyle(containerStyle)}>
        <Text style={stylesheet.getStyle(welcomeStyle)}>Welcome to React Native!</Text>
        <Text style={stylesheet.getStyle(instructionsStyle, blueStyle)}>To get started, edit App.tsx.</Text>
        <Text style={stylesheet.getStyle(instructionsStyle + ' ' + redStyle)}>{instructions}</Text>
      </View>
    );
  }
}
