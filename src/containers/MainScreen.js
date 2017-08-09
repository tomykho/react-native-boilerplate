// @flow

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";

export default class MainScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left />
        <Body>
          <Title>Main</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  render() {
    return (
      <Container>
        <Content padder
          contentContainerStyle={styles.content}>
          <Button
            block
            onPress={() => this.props.navigation.navigate('Profile', { name: 'Jane' })}>
              <Text>Post</Text>
          </Button>
          <Button
            style={{ marginTop: 12 }} 
            block
            onPress={() => this.props.navigation.navigate('Albums')}>
              <Text>Albums</Text>
          </Button>
        </Content>
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  }
});
