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
import AlbumsScreen from './containers/AlbumsScreen';

const AppNavigator = StackNavigator({
  Main: {
    screen: MainScreen,
  },
  Albums: {
    path: 'albums',
    screen: AlbumsScreen,
  },
}, {
  navigationOptions: {
    header: {
      style: {
      }
    },
  },
  cardStyle: {
    backgroundColor: 'white'
  }
});

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    );
  }

}