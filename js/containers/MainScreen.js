// @flow

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Component from '../components/Component';
import Button from '../components/Button';

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Main',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
          title="Post"
        />
        <Button
          style={global.styles.mt6}
          onPress={() => navigation.navigate('Albums')}
          title="Albums"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    justifyContent: 'center',
  },
});
