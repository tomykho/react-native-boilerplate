// @flow

import React from 'react';
import slowlog from 'react-native-slowlog';

export default class Component extends React.Component {

  constructor() {
    super()
    slowlog(this, /.*/, { threshold: 8 });
  }

}