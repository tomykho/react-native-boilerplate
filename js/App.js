// @flow

import React from 'react';
import {
  Button,
  ScrollView,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import styles from './lib/styles';
global.styles = styles;

import MainScreen from './containers/MainScreen';
import AlbumListScreen from './containers/AlbumListScreen';
import PhotoGridScreen from './containers/PhotoGridScreen';

const AppNavigator = StackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Albums: {
      screen: AlbumListScreen,
    },
    Photos: {
      screen: PhotoGridScreen,
    },
  },
  {
    navigationOptions: {
    },
    cardStyle: {
      backgroundColor: 'white'
    }
  }
);

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }

}