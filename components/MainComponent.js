import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import MainNavigator from '../navigator/MainNavigator';
// import { createStackNavigator } from 'react-navigation';

class Main extends Component {

  render() {
 
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
          <MainNavigator /> 
        </View>
    );
  }
}

export default Main;