import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../components/HomeComponent';
import Menu from '../components/MenuComponent';
import Contact from '../components/ContactComponent';
import About from '../components/AboutComponent';
import Dishdetail from '../components/DishdetailComponent';
import { createStackNavigator } from 'react-navigation-stack';


const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
  }
  );




const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail },
	},
	{
	  initialRouteName: 'Menu',
	  defaultNavigationOptions: {
		  headerStyle: {
			  backgroundColor: "#512DA8"
		  },
		  headerTintColor: '#fff',
		  headerTitleStyle: {
			  color: "#fff"            
		  }
	  }
	}
);


const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
  }
  );


const AboutNavigator = createStackNavigator({
    About: { screen: About }
  },
  {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff"            
        }
    }
  }
);



const MainNavigator = createDrawerNavigator({
    Home: { 
	    screen: HomeNavigator,
	    navigationOptions: {
		    drawerLabel: "Home",
		}
	},
    Menu: {
	    screen: MenuNavigator,
	    navigationOptions: {
		    drawerLabel: "Menu",
		}
	},
    Contact: {
	    screen: ContactNavigator,
	    navigationOptions: {
		    drawerLabel: "Contact Us",
		}
    },
    About: {
	    screen: AboutNavigator,
	    navigationOptions: {
		    drawerLabel: "About Us",
		}
    },
}, {	
    	drawerBackgroundColor: '#D1C4E9'
});





export default createAppContainer(MainNavigator);