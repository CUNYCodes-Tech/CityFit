import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  
} from 'react-native';

import NewUser from './app/components/NewUser/NewUser';

export default class cityfit extends Component{
  render(){
    return(
      <View>
        <NewUser/>
      </View>
    );
  }
}

AppRegistry.registerComponent('cityfit', () => cityfit);




