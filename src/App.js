// @flow

import React from 'react';
import {
  Button,
  ScrollView,
  Text,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';
import { navigateOnce } from './lib/navigator';

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

AppNavigator.router.getStateForAction = navigateOnce(AppNavigator.router.getStateForAction);

export default class App extends React.Component {

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <AppNavigator />
      </StyleProvider>
    );
  }

}