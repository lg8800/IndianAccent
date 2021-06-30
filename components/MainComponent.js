import React, { Component } from 'react';
import { View, Platform, ToastAndroid } from 'react-native';
import MainNavigator from '../navigator/MainNavigator';
import { connect } from 'react-redux';
import { fetchComments, fetchDishes, fetchLeaders, fetchPromos} from '../redux/ActionCreators';
import NetInfo from '@react-native-community/netinfo';

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

    NetInfo.fetch().then((connectionInfo) => {
              ToastAndroid.show('Initial Network Connectivity Type: '
                  + connectionInfo.type, ToastAndroid.LONG)
          });
          
          NetInfo.addEventListener(connectionChange => this.handleConnectivityChange(connectionChange))
      }
      
  componentWillUnmount() {
          NetInfo.removeEventListener(connectionChange => this.handleConnectivityChange(connectionChange))
      }
  
  handleConnectivityChange = (connectionInfo) => {
        switch (connectionInfo.type) {
            case 'none': 
                ToastAndroid.show ('You are now offline', ToastAndroid.LONG);
                break;
            case 'wifi':
                ToastAndroid.show ('You are now on WiFi', ToastAndroid.LONG);
                break;
            case 'cellular':
                ToastAndroid.show ('You are now on Cellular', ToastAndroid.LONG);
                break;
            case 'unknown' :
                ToastAndroid.show ('You are now have an Unknown connection', ToastAndroid.LONG);
                break;
            default: break;
        }
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