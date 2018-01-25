// @flow

import {
  AppRegistry,
} from 'react-native';

global.Promise = require("bluebird");
Promise.config({
  cancellation: true
});

import App from './src/App';

AppRegistry.registerComponent('Boilerplate', () => App);
