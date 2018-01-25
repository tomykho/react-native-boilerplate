// @flow

import React from 'react';

import {
  StyleSheet,
  View,
  FlatList,
  Image,
} from 'react-native';
import { 
  Header
} from "react-native-elements";
import api from '../lib/api';

export default class PhotoGridScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header 
        leftComponent={{ icon: 'arrow-back', onPress: () => navigation.goBack() }}
        centerComponent={{ text: `Photos (${navigation.state.params.album.id})` }}
      />
    )
  });

  constructor() {
    super();
    this.state = {
      refreshing: true,
      data: [],
      size: 0,
    };
  }

  componentDidMount() {
    const { album } = this.props.navigation.state.params;
    this.request = api.getAlbumPhotos(album.id)
      .then((data) => {
        this.setState({ refreshing: false, data });
      });
  }

  componentWillUnmount() {
    this.request.cancel();
  }

  render() {
    const { navigation } = this.props;
    return (
      <FlatList
        onLayout={this._handleLayout}
        data={this.state.data}
        extraData={this.state}
        refreshing={this.state.refreshing}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        numColumns={7}
      />
    );
  }

  _renderItem = ({item}) => {
    return <PhotoGridItem size={this.state.size} item={item} />;
  }

  _keyExtractor = (item, index) => item.id;

  _handleLayout = event => {
    const { width, height } = event.nativeEvent.layout;
    let numColumns = 4;
    if (width > height) {
      numColumns = 7;
    }
    const size = width / numColumns;
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

const styles = StyleSheet.create({
});
