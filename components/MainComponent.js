import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import MainNavigator from '../navigator/MainNavigator';
import { connect } from 'react-redux';
import { fetchComments, fetchDishes, fetchLeaders, fetchPromos} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () =>dispatch(fetchDishes()),
  fetchComments: () =>dispatch(fetchComments()),
  fetchPromos: () =>dispatch(fetchPromos()),
  fetchLeaders: () =>dispatch(fetchLeaders()),
})

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchLeaders();
    this.props.fetchPromos();
  }

  render() {
 
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
          <MainNavigator /> 
        </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);