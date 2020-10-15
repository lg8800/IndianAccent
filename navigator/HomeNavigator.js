import { createAppContainer } from 'react-navigation';
import Home from '../components/HomeComponent';
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
  export default createAppContainer(HomeNavigator);