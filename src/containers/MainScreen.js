// @flow

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { 
  Header, 
  Button,
  Icon,
} from "react-native-elements";

export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header 
        centerComponent={{ text: 'Main' }}
      />
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Post"
          onPress={() => this.props.navigation.navigate('Profile', { name: 'Jane' })}>
        </Button>
        <Button
          style={{ marginTop: 12 }} 
          title="Albums"
          onPress={() => this.props.navigation.navigate('Albums')}>
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
