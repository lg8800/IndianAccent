import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import { View, Platform } from 'react-native';
import MenuNavigator from '../navigator/MenuNavigator';
// import { createStackNavigator } from 'react-navigation';

class Main extends Component {

  render() {
 
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
          <MenuNavigator /> 
        </View>
    );
  }
}

export default Main;