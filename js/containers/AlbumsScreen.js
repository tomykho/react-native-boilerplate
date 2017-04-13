// @flow

import React from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import Button from '../components/Button';
import ProgressListView from '../components/ProgressListView';
import api from '../lib/api';

export default class AlbumsScreen extends React.Component {
  state: {
    data: Array<Object>,
    isLoading: boolean,
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
      this.setState({refreshing: false, data});
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ProgressListView
				data={this.state.data}
        refreshing={this.state.refreshing}
        renderItem={this._renderItem}
      />
    );
  }

  _renderItem({item}) {
		return (
			<TouchableOpacity style={styles.item}>
				<Text>{item.title}</Text>
			</TouchableOpacity>
		);
	}

}

const styles = StyleSheet.create({
  item: {
    padding: 12
  }
});
