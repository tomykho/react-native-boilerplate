// @flow

import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
	Platform,
} from 'react-native';

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true,
};

export default class ProgressListview extends React.Component {

  render() {
    if (this.props.refreshing) {
      return (
				<ActivityIndicator style={{flex: 1}} size="large" />
			);
    }
    return (
      <FlatList
        SeparatorComponent={SeparatorComponent}
        {...this.props}
        keyExtractor={(item, index) => index}
        viewabilityConfig={VIEWABILITY_CONFIG}
			/>
    );
  }

}

const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth;

class SeparatorComponent extends React.PureComponent {
  render() {
    return <View style={styles.separator} />;
  }
}

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
  },
});