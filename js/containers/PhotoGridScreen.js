// @flow

import React from 'react';

import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import Button from '../components/Button';
import api from '../lib/api';

export default class PhotoGridScreen extends React.Component {
  state: {
    data: Array<Object>,
    refreshing: boolean,
    size: number,
  };

  static navigationOptions = {
    title: 'Photos'
  };

  constructor() {
    super();
    this.state = {
      refreshing: true,
      data: [],
      size: 0
    };
  }

  componentDidMount() {
    const { album } = this.props.navigation.state.params;
    api.getAlbumPhotos(album.id)
      .then((data) => {
        this.setState({ refreshing: false, data });
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <FlatList
        onLayout={this._handleLayout}
        contentContainerStyle={styles.list}
        data={this.state.data}
        extraData={this.state}
        refreshing={this.state.refreshing}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }

  _renderItem = ({item}) => {
    const { size } = this.state;
    return <PhotoGridItem size={size} item={item} />;
  }

  _keyExtractor = (item, index) => item.id;

  _handleLayout = event => {
    const { width, height } = event.nativeEvent.layout;
    let size = 0;
    if (width < height) {
      size = width / 4;
    } else {
      size = width / 7;
    }
    this.setState({ size });
  }

}

class PhotoGridItem extends React.PureComponent {

  render() {
    const { item, size } = this.props;
    return (
        <Image 
          style={{ width: size, height: size }}
          source={{ uri: item.url }} />
    );
  }

  _onPress = () => {
    this.props.onPressItem(this.props.item);
  };

}

const { width } = Dimensions.get('window');
const ITEM_SIZE = width / 4;
const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
