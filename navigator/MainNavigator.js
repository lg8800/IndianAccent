import React, { Component } from 'react';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Home from '../components/HomeComponent';
import Menu from '../components/MenuComponent';
import Contact from '../components/ContactComponent';
import About from '../components/AboutComponent';
import Dishdetail from '../components/DishdetailComponent';
import Reservation from '../components/ReservationComponent';
import Login from '../components/LoginComponent';
import Favorites from '../components/FavoriteComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';
import { View, Platform, Image, StyleSheet, ScrollView, Text } from 'react-native';

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#fa0255"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: () => <Icon name='menu' size={24}
            color='white'
            onpress={() => navigation.toggleDrawer()}
            />
    })
  });

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu, 
        navigationOptions: ({ navigation }) => ({
            headerLeft: () => <Icon name='menu' size={24}
            color='white'
            onpress={() => navigation.toggleDrawer()}
            /> 
        }) },
  Dishdetail: { screen: Dishdetail },
	},
	{
	  initialRouteName: 'Menu',
	  defaultNavigationOptions: {
		  headerStyle: {
			  backgroundColor: "#fa0255"
		  },
		  headerTintColor: '#fff',
		  headerTitleStyle: {
			  color: "#fff"            
		  }
	  }
	});

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#fa0255"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: () => <Icon name='menu' size={24}
            color='white'
            onpress={() => navigation.toggleDrawer()}
            />
    })
  });

const AboutNavigator = createStackNavigator({
    About: { screen: About }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#fa0255"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: () => <Icon name='menu' size={24}
            color='white'
            onpress={() => navigation.toggleDrawer()}
            />
    })
  });

  const ReservationNavigator = createStackNavigator({
    Reservation: { screen: Reservation }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#fa0255"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: () => <Icon name='menu' size={24}
            color='white'
            onpress={() => navigation.toggleDrawer()}
            />
    })
  });

  const FavoritesNavigator = createStackNavigator({
    Favorites: { screen: Favorites }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#fa0255"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: () => <Icon name='menu' size={24}
            color='white'
            onpress={() => navigation.toggleDrawer()}
            />
    })
  });

  const LoginNavigator = createStackNavigator({
    Login: { screen: Login }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#fa0255"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        },
        headerLeft: () => <Icon name='menu' size={24}
            color='white'
            onpress={() => navigation.toggleDrawer()}
            />
    })
  });

const CustomDrawerCurrentComponent = (props) => {
  return(
<ScrollView>
    <SafeAreaView style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex: 1}}>
            <Image source={require('../components/images/indianaccent.png')}
              style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>
              Indian Accent
            </Text>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
  </ScrollView>
  );
}

const MainNavigator = createDrawerNavigator({
    Login: { 
      screen: LoginNavigator,
      navigationOptions: {
        drawerLabel: "Login",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='sign-in'
            type='font-awesome'
            size={24}
            color={tintColor}
            />
        )
      }
    },
    Home: { 
	    screen: HomeNavigator,
	    navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='home'
            type='font-awesome'
            size={24}
            color={tintColor}
            />
        )
		  }
	  },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "About Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}
            />
        )
    }
    },
    Menu: {
	    screen: MenuNavigator,
	    navigationOptions: {
		    drawerLabel: "Menu",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='list'
            type='font-awesome'
            size={24}
            color={tintColor}
            />
        )
		}
	  },
    Contact: {
	    screen: ContactNavigator,
	    navigationOptions: {
		    drawerLabel: "Contact Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='address-card'
            type='font-awesome'
            size={22}
            color={tintColor}
            />
        )
		}
    },
    Favorites: {
      screen: FavoritesNavigator,
      navigationOptions: {
        drawerLabel: "My Favorites",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='heart'
            type='font-awesome'
            size={22}
            color={tintColor}
            />
        )
    }
    },
  Reservation: {
    screen: ReservationNavigator,
    navigationOptions: {
      drawerLabel: "Reserve Table",
      drawerIcon: ({ tintColor }) => (
        <Icon
          name='cutlery'
          type='font-awesome'
          size={22}
          color={tintColor}
          />
      )
    }
  }
}, {	
      initialRouteName: 'Home',
      drawerBackgroundColor: '#f0f0f0',
      contentComponent: CustomDrawerCurrentComponent
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#fa0255',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
})

export default createAppContainer(MainNavigator);