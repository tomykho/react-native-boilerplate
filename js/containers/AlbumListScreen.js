// @flow

import React from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import Button from '../components/Button';
import api from '../lib/api';

export default class AlbumListScreen extends React.Component {
  state: {
    data: Array<Object>,
    refreshing: boolean,
  };

  static navigationOptions = {
    title: 'Albums'
  };

  constructor() {
    super();
    this.state = {
      refreshing: true,
      data: [],
    };
  }

  componentDidMount() {
    api.getAlbums()
      .then((data) => {
        this.setState({ refreshing: false, data });
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        refreshing={this.state.refreshing}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onPressItem={this._onPressItem}
      />
    );
  }

  _renderItem = ({item}) => (
    <AlbumListItem item={item} onPressItem={this._onPressItem} />
  );

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (item) => {
    const { navigation } = this.props;
    navigation.navigate('Photos', { album: item });
  };

}

class AlbumListItem extends React.PureComponent {

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={styles.item} onPress={this._onPress}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  _onPress = () => {
    this.props.onPressItem(this.props.item);
  };

}

const styles = StyleSheet.create({
  item: {
    padding: 12
  }
});
